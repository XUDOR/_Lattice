const db = require('../connection');

const getPostById = async (postId) => {
  const query = `
    SELECT posts.*, users.username 
    FROM posts 
    JOIN users ON posts.user_id = users.id 
    WHERE posts.id = $1
  `;
  const results = await db.query(query, [postId]);
  return results.rows[0];
};

module.exports = { getPostById };
