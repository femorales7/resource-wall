const db = require('../connection');

const onePostWithcomment = function(id) {
  return db
  .query('SELECT * FROM posts WHERE posts.id = $1 ', [id])
  .then((data) => {
    return data.rows;
  });
};

module.exports = { onePostWithcomment }


