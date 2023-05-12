//route for index

const express = require("express");
const router = express.Router();

const postQuerys = require("../db/queries/getallposts");
const userQuerys = require('../db/queries/getuserwithemail');


router.post("/", (req, res) => {
  res.clearCookie('user_id');
  res.redirect(`/`);
})

router.get('/:id', (req, res) => {
  userQuerys.getUserWithEmail(req.params.id)
    .then((user) => {
      // res.cookie('user_id', req.params.id);
      postQuerys.getAllPosts(50)
        .then((posts) => {
          const templateVars = { posts: posts, user: user };
          return res.render('index', templateVars);
        })
        .catch((err) => {
          console.error(err);
          res.send(err);
        });
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

// router.get('/', (req, res) => {
//   postQuerys.getAllPosts(50)

//     .then((posts) => {
//       console.log(posts);
//       user =  {
//         id: 0
//       }
//       const templateVars = { posts: posts, user: user};
//       console.log('templateVars', templateVars);
//       return res.render('index', templateVars);
//     })
//     .catch((err) => {
//       console.error(err);
//       res.send(err);
//     });
// });

router.get('/', (req, res) => {
  postQuerys.getAllPosts(50)
  .then((posts) => {
          console.log(posts);
          user =  {
            id: 0
          }
          const templateVars = { posts: posts, user: user};

    if (!req.query.search){
      return res.render('index', templateVars);
    }
    const searchQuery = req.query.search.toLowerCase();
    const filterPosts = posts.filter ( (post) => {
      return post.title.toLowerCase().includes(searchQuery) ||
      post.topic.toLowerCase().includes(searchQuery)
    })
    const templateVars2 = { posts: filterPosts }
    return res.render('index', templateVars2)
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;
