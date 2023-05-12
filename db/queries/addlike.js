const db = require('../connection');

//get user's email when they log in
const addLike = (useId, postId) => {
  const query = `INSERT INTO likes (user_id, post_id) VALUES ($1, $2);`

  return db
  .query(query, [useId, postId])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { addLike };
