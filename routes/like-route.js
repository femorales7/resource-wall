const express = require("express");
const router = express.Router();

const addLikeQuery = require('../db/queries/addlike');

router.post('/', (req, res) => {
  const userId = req.cookies.user_id;
  const postId = req.cookies.post_id;

  addLikeQuery.addLike(userId, postId)
   .then((like) => {
    res.redirect(`/posts/${postId}`);
  })
});

module.exports = router;
