//route for index

const express = require("express");
const router = express.Router();

const postQuerys = require("../db/queries/getallposts");
const userQuerys = require('../db/queries/getuserwithemail');

router.get('/', (req, res) => {
  postQuerys.getAllPosts(50)

    .then((posts) => {
      console.log(posts);
      user =  {
        id: 0,
        name: '0',
        email: '0',
        password: '0',
        profile_photo_url: '0'
      }
      const templateVars = { posts: posts, user: user};
      console.log('templateVars', templateVars);
      return res.render('index', templateVars);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

router.get('/:id', (req, res) => {
  res.cookie('user_id', req.params.id);

  userQuerys.getUserWithEmail(req.params.id)
    .then((user) => {
      console.log(user);
      const templateVarsuser = { user: user };

      postQuerys.getAllPosts(50)
        .then((posts) => {
          console.log(posts);
          const templateVars = { posts: posts, user: user };
          console.log('templateVars', templateVars);
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

// router.post('/', (req, res) => {
//   console.log(req.body);
//   const username = req.body.username;
//   const password = req.body.password;
//   if(!username || !password){
//     res.status(400).send('Please Provide an email AND a password');
//   }
//   userQuerys.getUserWithEmail(req.body.username)
//   .then((user) => {
//     console.log(user);
//     res.cookie('user_id', user.id);
//     const templateVars = { user : user };
//     console.log('templateVars' ,templateVars);
//     return res.render('index', templateVars );

//   })


// })

module.exports = router;
