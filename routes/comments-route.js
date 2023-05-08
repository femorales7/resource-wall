const express = require('express');
const router  = express.Router();

const commentsQuerys = require('../db/queries/getcommentwithpost ')

router.get('/', (req, res) => {
  commentsQuerys.getCommentWithPost(postid)
    .then((comments) => {
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
  });

  module.exports = router;
