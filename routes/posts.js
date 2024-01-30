const express = require('express');
const router = express.Router();
const { getAllPosts, createPost, getPostsBySearch, getPostById } = require('../db/queries/postsQueries');
const { getUsersVisible } = require('../db/queries/getUsersVisible');


// Home page route
router.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts();
    const users = await getUsersVisible();
    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Create post
router.post('/create-post', async (req, res) => {
  const { title, url, description, topic_id } = req.body;
  const userId = req.session.user.id; // Retrieve user ID from session

  try {
    await createPost(title, url, description, topic_id, userId);
    res.redirect('/users/profile'); // Redirect to user profile
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Topics fetch
router.get('/new', async (req, res) => {
  try {
    const topics = await getTopics(); // Assuming you have a getTopics function in topicsQueries.js
    res.render('newPost', { topics });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Search route
router.get('/search', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const posts = await getPostsBySearch(searchTerm);
    const users = await getUsersVisible();
    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Route to render an individual post
router.get('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await getPostById(postId); // Assuming getPostById is defined in postsQueries
    res.render('postDetail', { post }); // Ensure you have a postDetail.ejs view
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
