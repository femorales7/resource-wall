const db = require('../connection');

const averageRate = (postId) => {
  let query = `SELECT CAST(AVG(ratings.rating) AS DECIMAL(10,1)) FROM ratings JOIN posts ON posts.id = post_id WHERE post_id = $1`;

  return db
  .query(query, [postId])
  .then((data) => {
    return data.rows;
  });
};

module.exports = { averageRate };
