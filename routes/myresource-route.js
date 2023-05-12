const express = require("express");
const router = express.Router();
const getPostWithUseridQuery = require('../db/queries/getpostwithuserid');
const userQuerys = require('../db/queries/getuserwithemail');
const getLikedPostQuery = require('../db/queries/getlikedpost');

router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  const postId = req.cookies.post_id;

  userQuerys.getUserWithEmail(userId)
  .then((user) => {
    getPostWithUseridQuery.getPostWithUserid(userId)
    .then((posts) => {
      getLikedPostQuery.getLikedPost(userId)
      .then((likedposts) => {
        const templateVars = {
          user : user,
          posts : posts,
          likedposts : likedposts
        };
        return res.render('myresource', templateVars);
      })
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
  })


});

module.exports = router;
