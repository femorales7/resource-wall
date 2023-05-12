const db = require('../connection');

//Count comments per post
const countCommentsPerPost = (post_id) => {
  return db
  .query( `SELECT posts.id, COUNT(comments.id) AS comment_count
  FROM posts
  LEFT JOIN comments ON comments.post_id = posts.id
  WHERE posts.id = $1
  GROUP BY posts.id
  ORDER BY posts.id;`, [post_id])
  .then((data) => {
    console.log(data.rows[0]);
    return data.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  })
};
module.exports = {countCommentsPerPost};
