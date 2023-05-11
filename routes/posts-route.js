//route for post

const express = require('express');
const router  = express.Router();

const onePostQuerys = require('../db/queries/onepostwithidandcomment');


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

// router.get('/:id', (req, res) => {
//   commentQuerys.commentsWithPost(req.params.id)
//   .then((comments) => {
//     const templateVars = { comments : comments };
//     console.log('comments' ,templateVars);
//     return res.render('post', templateVars);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.send(err);
//   });
// });



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
