const db = require('../connection');

const createPost = async (title, url, description, topic_id, userId) => {
  const query = `
    INSERT INTO posts (title, url, description, topic_id, user_id, created_at) 
    VALUES ($1, $2, $3, $4, $5, NOW())
  `;
  await db.query(query, [title, url, description, topic_id, userId]);
};

module.exports = createPost;
