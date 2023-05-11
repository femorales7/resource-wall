const db = require('../connection');

//get all post or search specific post
//Only two option they can search by topic and title include description.
const getAllPosts = (limit = 8) => {
  let query = `SELECT posts.*, COUNT(comments.id) AS comment_count
  FROM posts
  LEFT JOIN comments ON comments.post_id = posts.id
  GROUP BY posts.id
  ORDER BY posts.id `;

  let queryParms = [];


  queryParms.push(limit);
  query += `LIMIT $${queryParms.length};`;
  console.log(db)

  return db
  .query(query, queryParms)
  .then((data) => {
    console.log(data.rows);
    return data.rows;
  });
};

module.exports = { getAllPosts };
