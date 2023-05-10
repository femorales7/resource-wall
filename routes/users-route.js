/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userQuerys = require('../db/queries/getuserwithemail');
const { render } = require('ejs');


router.post('/users', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password){
    res.status(400).send('Please Provide an email AND a password');
  }
  userQuerys.getUserWithEmail(req.body.username)
  .then((user) => {
    console.log(user);
    res.cookie('user_id', user.id);
    const templateVars = { user : user };
    console.log('templateVars' ,templateVars);
    return res.render('index', templateVars );

  })


})

// router.get('/', (req, res) => {
//   userQuerys.getUsers()
//   .then((users) => {
//     console.log(users);
//     res.json(users);
//   });
// });

// router.get('/login/:id', (req, res) => {
//   res.cookie('user_id', req.params.id);
//   res.redirect('/');
// });

module.exports = router;
