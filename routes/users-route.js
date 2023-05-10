/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const userQuerys = require('../db/queries/users');

router.get('/', (req, res) => {
  userQuerys.getUsers()
  .then((users) => {
    console.log(users);
    res.json(users);
  });
});

router.get('/login/:id', (req, res) => {
  res.cookie('user_id', req.params.id);
  res.redirect('/');
});

module.exports = router;
