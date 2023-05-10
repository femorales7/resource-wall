const db = require('../connection');


//get user's email when they log in
const getUserWithId = (id) => {
  return db
  .query('SELECT * FROM users WHERE id = $1;', [id])
  .then((data) => {
    return data.rows[0]
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getUserWithId };
