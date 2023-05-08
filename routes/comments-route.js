const express = require('express');
const router  = express.Router();

const commentsQuerys = require('../db/queries/getallcomments')

router.get('/', (req, res) => {
  commentsQuerys.getAllComments()
    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    })
  });

  module.exports = router;
