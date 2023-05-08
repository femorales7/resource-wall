const db = require('../connection');

const getAllComments = () => {
  return db.query('SELECT * FROM comments;')
    .then(data => {
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getAllComments };
