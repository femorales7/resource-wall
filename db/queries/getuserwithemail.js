const db = require('../connection');


//get user's email when they log in
const getUserWithEmail = (id) => {
  return db
  .query('SELECT * FROM users WHERE id = $1;', [id])
  .then((data) => {
    console.log(data.rows[0])
    return data.rows[0]
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getUserWithEmail };
