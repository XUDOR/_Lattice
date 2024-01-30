const express = require('express');
const router = express.Router();
const getPostsBySearch = require('../../db/queries/getPostsBySearch');

router.get('/search', async (req, res) => {
  // ... implementation ...
});

module.exports = router;
