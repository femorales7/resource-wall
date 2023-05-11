const db = require('../connection');

const getCommentWithPost = (postid) => {
  return db.query('SELECT message FROM comments WHERE post_id = $1 ORDER BY id DESC;', [postid])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getCommentWithPost };
