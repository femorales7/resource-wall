//route for index

const express = require("express");
const router = express.Router();

const postQuerys = require("../db/queries/getallposts");

router.get('/', (req, res) => {
  postQuerys.getAllPosts(10)
    .then((posts) => {
      const templateVars = { posts: posts };
      console.log(templateVars);
      return res.render('index', templateVars);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

module.exports = router;
