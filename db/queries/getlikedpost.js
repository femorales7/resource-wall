const db = require('../connection');

const getLikedPost = (userid) => {
  return db
  .query('SELECT * FROM posts JOIN likes ON likes.post_id = posts.id WHERE likes.user_id = $1', [userid])
  .then((data) => {
    return data.rows;
  })
  .catch((err) => {
    console.log(err.message);
  });
};


module.exports = { getLikedPost };
