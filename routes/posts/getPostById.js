// routes/posts/getPostById.js
const express = require('express');
const router = express.Router();
const { getPostById } = require('../../db/queries/postsQueries');

router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await getPostById(postId);
        if (post) {
            res.render('postDetail', { post });
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
