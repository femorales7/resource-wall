const express = require("express");
const router = express.Router();
const getPostWithUseridQuery = require('../db/queries/getpostwithuserid');
const userQuerys = require('../db/queries/getuserwithemail');

router.get('/', (req, res) => {
  const userId = req.cookies.user_id;

  userQuerys.getUserWithEmail(userId)
  .then((user) => {
    getPostWithUseridQuery.getPostWithUserid(userId)
    .then((posts) => {
      const templateVars = {
        user : user,
        posts : posts
      };
      return res.render('myresource', templateVars);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
  })


});

module.exports = router;
