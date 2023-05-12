const express = require("express");
const router = express.Router();

const addRatingQuery = require('../db/queries/addrate');

router.post('/', (req, res) => {
  const userId = req.cookies.user_id;
  const postId = req.cookies.post_id;
  const rate = req.body.rating;

  addRatingQuery.addRate(userId, postId, rate)
   .then((rate) => {
    console.log('rate', rate);
    res.redirect(`/posts/${postId}`);
  })
});

module.exports = router;
