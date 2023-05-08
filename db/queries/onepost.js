const db = require('../connection');

const onePost = function(id) {
  return db
  .query('SELECT * FROM posts WHERE id = $1;', [id])
  .then((data) => {
    return data.rows;
  });
};

module.exports = { onePost }
