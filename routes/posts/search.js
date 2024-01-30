router.get('/search', async (req, res) => {
  const searchTerm = req.query.search;
  try {
    const posts = await getPostsBySearch(searchTerm);
    const users = await getUsersVisible(); // Fetch visible users
    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
