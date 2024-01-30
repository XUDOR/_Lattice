const db = require('../connection');

const getAllPosts = async () => {
  try {
    const postsResult = await db.query(`
      SELECT posts.*, users.username 
      FROM posts 
      JOIN users ON posts.user_id = users.id 
      ORDER BY posts.created_at DESC
    `);
    return postsResult.rows;
  } catch (err) {
    console.error('Error in getAllPosts:', err.stack);
    throw err;
  }
};

module.exports = { getAllPosts };
