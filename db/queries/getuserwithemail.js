const db = require('../connection');


//get user's email when they log in
const getUserWithEmail = (email) => {
  return db
  .query('SELECT * FROM users WHERE email = $1;', [email])
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getUserWithEmail };
