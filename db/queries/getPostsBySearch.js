const db = require('../connection');

const getPostsBySearch = async (searchTerm) => {
  const query = `
    SELECT * FROM posts WHERE title ILIKE $1 OR description ILIKE $1 ORDER BY created_at DESC
  `;
  const results = await db.query(query, [`%${searchTerm}%`]);
  return results.rows;
};

module.exports = getPostsBySearch;
