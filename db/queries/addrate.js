const db = require('../connection');

const addRate = (uesrId, postId, rate) => {
  const query = `INSERT INTO ratings (user_id, post_id, rating) VALUES ($1, $2, $3);`;


  return db.query(query, [uesrId, postId, rate])
    .then(data => {
      console.log('data', data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = { addRate };
