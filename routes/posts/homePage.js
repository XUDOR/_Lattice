router.get('/', async (req, res) => {
  try {
    const posts = await getAllPosts();
    const users = await getUsersVisible(); // Replace with actual function to get visible users
    res.render('index', { posts, users, user: req.session.user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});