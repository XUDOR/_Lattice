const express = require('express');
const router = express.Router();
const createPost = require('../../db/queries/createPost');

router.post('/create-post', async (req, res) => {
  // ... implementation ...
});

module.exports = router;
