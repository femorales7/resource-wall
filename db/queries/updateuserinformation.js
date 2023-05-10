const db = require('../connection');

const updateUserInfomation = (name, email, id) => {
  const query = `UPDATE users SET name = $1, email = $2 WHERE id = $3`;
  return db.query(query, [name, email, id])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//change a bit
module.exports = { updateUserInfomation };
