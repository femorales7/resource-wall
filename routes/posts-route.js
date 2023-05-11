//route for post

const express = require('express');
const router  = express.Router();

const onePostQuerys = require('../db/queries/onepostwithidandcomment');
const addNewCommentQuerys = require('../db/queries/addNewComment');


router.post('/:id', (req, res) => {
  const userId = req.cookies.user_id;
  const postId = req.params.id;
  const comment = req.body.comment;
  console.log('here i am');
  addNewCommentQuerys.addNewComment(userId, postId, comment)
  .then((comment) => {
    console.log('comment', comment);
    return res.redirect(`/posts/${postId}`);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
});


router.get('/:id', (req, res) => {
  onePostQuerys.onePostWithIdAndComment(req.params.id)
  .then((posts) => {
    console.log(posts);
    const templateVars = { posts : posts };
    return res.render('post', templateVars);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  });
});


module.exports = router;
