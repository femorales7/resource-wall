const db = require('../connection');

const commentsWithPost = function(id) {
  return db
  .query('SELECT * FROM comments JOIN posts ON posts.id = post_id WHERE posts.id = $1;', [id])
  .then((data) => {
    return data.rows;
  });
};

module.exports = { commentsWithPost };
