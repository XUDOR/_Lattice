const express = require('express');
const router = express.Router();
const getAllPosts = require('../../db/queries/getAllPosts');

router.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.render('index', { posts, user: req.session.user }); // Assuming you handle the user and other variables here
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
