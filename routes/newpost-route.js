const express = require('express');
const router  = express.Router();

const addNewPostquery = require('../db/queries/addnewpost');


router.get('/', (req, res) => {
  res.render('newpost');
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
