const express = require('express');
const router  = express.Router();
const cookieParser = require('cookie-parser');

const addNewPostquery = require('../db/queries/addnewpost');
router.use(cookieParser());


router.get('/', (req, res) => {
  const userId = req.cookies.user_id;
  console.log({ userId: userId });
  userQuerys.getUserWithEmail(userId)
    .then((user) => {
      console.log(user);
      const templateVars = {  user: user };
      return res.render("newpost", templateVars);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

router.post('/', (req, res) => {
  const post = req.body;
  console.log('post', post);
  // const topic = req.body.topic;
  // const title = req.body.title;
  // const externalUrl = req.body.externalUre;
  // const urlImage = req.body.urlImage;
  // const description = req.body.description;
  addNewPostquery.addNewPost(post)
  .then((data) => {
    console.log('add new post', data);
    res.redirect('/newpost');
  })
});



module.exports = router;
