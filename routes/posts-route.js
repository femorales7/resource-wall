//route for post

const express = require('express');
const router  = express.Router();

const postQuerys = require('../db/queries/getallposts');
const onePostQuerys = require('../db/queries/onepostwithcomment');



router.get('/:id', (req, res) => {
  onePostQuerys.onePostWithcomment(req.params.id)
  .then((posts) => {
    const templateVars = { posts : posts };
    console.log('templateVars' ,templateVars);
    return res.render('post', templateVars);
  })
  .catch((err) => {
    console.error(err);
    res.send(err);
  })
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
