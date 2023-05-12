//route for post

const express = require("express");
const router = express.Router();
const CommentQuerys = require("../db/queries/addNewComment");
const cookieParser = require("cookie-parser");

const postQuerys = require("../db/queries/getallposts");
const onePostQuerys = require("../db/queries/onepostwithcomment");
const userQuerys = require("../db/queries/getuserwithemail");
const commentQuery = require("../db/queries/getcommentwithpost ");
const averageRateQuery = require("../db/queries/averagerate");
const getLikeQuery = require("../db/queries/getlike")

router.use(cookieParser());

router.get("/:id", (req, res) => {
  res.cookie("post_id", req.params.id);
  const userId = req.cookies.user_id;
  console.log("userId", userId);

  if (userId === undefined) {
    res.redirect("/");
  }

  userQuerys
    .getUserWithEmail(userId)
    .then((user) => {
      console.log(user);
      const templateVarsuser = { user: user };

      onePostQuerys.onePostWithcomment(req.params.id).then((posts) => {
        commentQuery.getCommentWithPost(req.params.id).then((comments) =>{
          averageRateQuery.averageRate(req.params.id).then((rate) => {
            getLikeQuery.getlikes(req.params.id).then((like) => {
              console.log(like);
              const templateVars = {
                posts: posts,
                user: user,
                comments: comments,
                rate: rate,
                like: like
              };
              console.log("templateVars", templateVars);
              return res.render("post", templateVars);
            })
          })

        })

      });
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

router.post("/:id", (req, res) => {
  const userId = req.cookies.user_id;
  const postId = req.cookies.post_id;
  const comment = req.body.comment;
  console.log("here i am");
  CommentQuerys.addNewComment(userId, postId, comment)
    .then((comment) => {
      console.log("comment", comment);
      return res.redirect(`/posts/${postId}`);
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
