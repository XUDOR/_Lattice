const db = require('../connection');

const getAllPosts = async () => {
  const query = `
    SELECT posts.*, users.username 
    FROM posts 
    JOIN users ON posts.user_id = users.id 
    ORDER BY posts.created_at DESC
  `;
  const results = await db.query(query);
  return results.rows;
};

module.exports = getAllPosts;
