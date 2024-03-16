// Corrected import statement in routes/posts/getPostById.js
const express = require('express');
const router = express.Router();
// Destructure getPostById from the exported object
const { getPostById } = require('../../db/queries/getPostById'); // Ensure path is correct

router.get('/posts/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await getPostById(postId);
        if (post) {
            // Include the user object from the session
            res.render('postDetail', { post, user: req.session.user });
        } else {
            res.status(404).send("Post not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});


module.exports = router;
