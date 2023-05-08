const db = require('../connection');

//get all post or search specific post
//Only two option they can search by topic and title include description.
const getAllPosts = (limit = 8) => {
  let query = `SELECT * FROM posts `;

  let queryParms = [];

  // let clause = 'WHERE';

  // if(options.topic) {
  //   queryParms.push(options.topic);
  //   query += `${clause} topic = $${queryParms.length}`;
  //   clause = 'AND';
  // };

  // if(options.title) {
  //   queryParms.push(`%${options.title}%`);
  //   queryParms.push(`%${options.title}%`);
  //   query += `${clause} topic LIKE $${queryParms.length} AND description LIKE $${queryParms.length}`;
  //   clause = 'AND';
  // };
  queryParms.push(limit);
  query += `LIMIT $${queryParms.length};`;
  console.log(query, queryParms);

  return db
  .query(query, queryParms)
  .then((data) => {
    data.rows;
    console.log(data.rows);
  });
};

module.exports = { getAllPosts }
