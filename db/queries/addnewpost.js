const db = require('../connection');

//adding new user information
const addNewPost = (post) => {
  const query = `INSERT INTO posts (user_id, topic, title, description, external_url, url_image, rating, likes, date) VALUES (1, $1, $2, $3, $4, $5, 0, 0, Now());`;
  // const qs2 = `INSERT INTO posts (user_id, topic, title, description, external_url, url_image,rating, likes, date) VALUES (1, 'cooking', 'How to make branch', 'This is how to make it', 'https://www.foodnetwork.com/recipes/food-network-kitchen/spaghetti-with-oil-and-garlic-aglio-et-olio-recipe-1944538', '123',0, 0, NOW());`

  // const qs3 = `SELECT * FROM posts;`
  const topic = post.topic;
  const title = post.title;
  const description = post.description;
  const externalUrl = post.externalUrl;
  const urlImage = post.urlImage;

  return db.query(query, [topic, title, description, externalUrl, urlImage])
  // return db.query(qs3)
    .then(data => {
      console.log('data', data.rows);
      return data.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//change a bit
module.exports = { addNewPost };
