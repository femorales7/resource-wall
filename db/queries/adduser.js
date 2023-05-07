const db = require('../connection');

//adding new user information
const addUser = (user) => {
  const query = `INSERT INTO users (name, email, password, profile_photo_url) VALUES ($1, $2, $3, $4)`;
  const name = user.name;
  const email = user.email;
  const password = user.password;
  const url = user.profile_photo_url;
  return db.query(query, [name, email, password, url])
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { addUser };
