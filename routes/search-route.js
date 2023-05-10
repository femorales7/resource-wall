const express = require('express');
const router  = express.Router();
const postQuerys = require('../db/queries/getallposts');

// router.get("/", (req, res) => {
//   postQuerys.getallposts(req.params.id)
//   .then((searches) => {
//     const templateVars = { searches : searches };
//     console.log('templateVars' ,templateVars);
//     return res.render('search', templateVars);
//   })
//   .catch((err) => {
//     console.error(err);
//     res.send(err);
//   })
// });

router.get("/", (req, res) => {
 res.render('search')
})

  module.exports = router;