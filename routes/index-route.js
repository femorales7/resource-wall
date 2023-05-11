//route for index

const express = require("express");
const router = express.Router();

const postQuerys = require("../db/queries/getallposts");
const userQuerys = require('../db/queries/getuserwithemail');

router.get('/', (req, res) => {
  postQuerys.getAllPosts(50)

    .then((posts) => {
      console.log(posts);
      user =  {
        id: 0
      }
      const templateVars = { posts: posts, user: user};
      console.log('templateVars', templateVars);
      return res.render('index', templateVars);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

router.get('/:id', (req, res) => {


  userQuerys.getUserWithEmail(req.params.id)
    .then((user) => {
      res.cookie('user_id', req.params.id);
      console.log(user);
      const templateVarsuser = { user: user };

      postQuerys.getAllPosts(50)
        .then((posts) => {
          console.log(posts);
          const templateVars = { posts: posts, user: user };
          console.log('templateVars', templateVars);
          return res.render('index', templateVars);
        })
        .catch((err) => {
          console.error(err);
          res.send(err);
        });
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

module.exports = router;
