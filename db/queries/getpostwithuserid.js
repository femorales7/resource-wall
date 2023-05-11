const db = require('../connection');

const getPostWithUserid = (userid) => {
  return db
  .query('SELECT * FROM post WHERE user_id = $1', [userid])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};


module.exports = { getPostWithUserid };
