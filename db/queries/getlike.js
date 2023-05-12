const db = require('../connection');

//get user's email when they log in
const getlikes = (postId) => {
  return db
  .query('SELECT COUNT(*) FROM likes WHERE post_id = $1;', [postId])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getlikes };
