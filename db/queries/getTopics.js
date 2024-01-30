const db = require('../connection');

const getTopics = async () => {
  const query = 'SELECT * FROM topics';
  const results = await db.query(query);
  return results.rows;
};

module.exports = { getTopics };
