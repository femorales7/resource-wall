const db = require('../connection');

const getPostWithUserid = (userid) => {
  return db
  .query('SELECT * FROM posts WHERE user_id = $1', [userid])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};


module.exports = { getPostWithUserid };
