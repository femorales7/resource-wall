const db = require('../connection');

//adding new comment
const addNewComment = (userId, postId, comment) => {
  const query = `INSERT INTO comments (user_id, post_id, message) VALUES ($1, $2, $3);`

  return db.query(query, [userId, postId, comment])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = { addNewComment }
