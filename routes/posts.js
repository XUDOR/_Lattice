const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// Home page route
router.get('/', async (req, res) => {
  try {
    // Updated query to include the author's username
    const postsResult = await db.query(`
      SELECT posts.*, users.username 
      FROM posts 
      JOIN users ON posts.user_id = users.id 
      ORDER BY posts.created_at DESC
    `);
    const posts = postsResult.rows;

    const usersResult = await db.query('SELECT * FROM users WHERE visible = true');
    const users = usersResult.rows;

    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});



//create
router.post('/create-post', async (req, res) => {
  const { title, url, description, topic_id } = req.body;
  const userId = req.session.user.id; // Retrieve user ID from session

  try {
    await db.query('INSERT INTO posts (title, url, description, topic_id, user_id, created_at) VALUES ($1, $2, $3, $4, $5, NOW())', 
      [title, url, description, topic_id, userId]);

    res.redirect('/users/profile'); // Redirect to user profile
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});



// topics fetch >>
router.get('/new', async (req, res) => {
  try {
    const topicsResult = await db.query('SELECT * FROM topics');
    const topics = topicsResult.rows;

    res.render('newPost', { topics: topics });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});


// Search route
router.get('/search', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const postsResult = await db.query("SELECT * FROM posts WHERE title ILIKE $1 OR description ILIKE $1 ORDER BY created_at DESC", [`%${searchTerm}%`]);
    const posts = postsResult.rows;

    // Fetch users visible in user list
    const usersResult = await db.query('SELECT * FROM users WHERE visible = true');
    const users = usersResult.rows;

    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route to render an individual post
router.get('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;
  // Fetch post data from the database using postId
  // ...
  res.render('Posts', { post: postData });
});


module.exports = router;