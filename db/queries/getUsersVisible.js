const db = require('../connection');

const getUsersVisible = async () => {
  const query = 'SELECT * FROM users WHERE visible = true';
  const results = await db.query(query);
  return results.rows;
};

module.exports = { getUsersVisible };
