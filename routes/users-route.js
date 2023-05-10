/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


const getUserWithIdQuerys = require('../db/queries/getuserwithid');
const userQuerys = require('../db/queries/getuserwithemail');
const { render } = require('ejs');


// router.post('/users', (req, res) => {
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

router.get('/', (req, res) => {
  const userId = req.cookies['user_id'];
  getUserWithIdQuerys.getUserWithId(userId)
  .then((user) => {
    const templateVars = { user : user};
    console.log(templateVars);
    res.render('user', templateVars);
  });
});

router.get('/', (req, res) => {
  const userId = req.cookies;
  console.log(userId);
});

router.post("/:id", (req, res) => {
  const userName = req.body.userName;
});


module.exports = router;
