router.get('/posts/:postId', async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await getPostById(postId);
    res.render('postDetail', { post }); // Assuming 'postDetail' is your post detail view
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
