//route for post

const express = require("express");
const router = express.Router();
const cookieParser = require('cookie-parser');

const postQuerys = require("../db/queries/getallposts");
const onePostQuerys = require("../db/queries/onepostwithcomment");
const userQuerys = require('../db/queries/getuserwithemail');

router.use(cookieParser());

router.get("/:id", (req, res) => {
  res.cookie("post_id", req.params.id);
  const userId = req.cookies.user_id;
  console.log("userId", userId);

  if (userId === undefined){

    res.redirect("/");
  };

  userQuerys.getUserWithEmail(userId)
    .then((user) => {
      console.log(user);
      const templateVarsuser = { user: user };

      onePostQuerys.onePostWithcomment(req.params.id).then((posts) => {
        const templateVars = { posts: posts, user: user };
        console.log("templateVars", templateVars);
        return res.render("post", templateVars);
      });
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

// router.get('/', (req, res) => {
//   postQuerys.getAllPosts(10)
//   .then((posts) => {
//     const templateVars = { posts : posts };
//     console.log('templateVars' ,templateVars);
//     res.render('post', templateVars);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.send(err);
//   })
// });

module.exports = router;
