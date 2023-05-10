/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


const getUserWithIdQuerys = require('../db/queries/getuserwithid');




router.get('/', (req, res) => {
  console.log('cookie', req.cookies);
  const userId = req.cookies['user_id'];
  console.log('userid', userId);
  getUserWithIdQuerys.getUserWithId(userId)
  .then((user) => {
    console.log(user);
    res.json(user);
  });
});

router.get('/', (req, res) => {
  const userId = req.cookies;
  console.log(userId);
})


module.exports = router;
