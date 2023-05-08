//route for post

const express = require('express');
const router  = express.Router();

const postQuerys = require('../db/queries/getallposts');

router.get('/', (req, res) => {
  postQuerys.getAllPosts(10)
  .then((posts) => {
    res.json(posts);
  })
  .catch((err) => {
    res.send(err);
  })
});

module.exports = router;
