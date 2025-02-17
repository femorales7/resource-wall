// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users-route');
const postRoutes = require('./routes/posts-route');
const commentRoutes = require('./routes/comments-route');
const indexRoute = require('./routes/index-route');
const searchRoutes = require('./routes/search-route');
const newPostRoutes = require('./routes/newpost-route');
const myResourceRoutes = require('./routes/myresource-route');
const ratingRoutes = require('./routes/rating-route');
const likeRoutes = require('./routes/like-route');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/likes', likeRoutes)
app.use('/posts', postRoutes);
app.use('/users', usersRoutes);
app.use('/newpost', newPostRoutes);
app.use('/myresource', myResourceRoutes);
app.use('/rating', ratingRoutes);
app.use('/', indexRoute);
app.use('/comments', commentRoutes);
app.use('/search', searchRoutes);


// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/newpost', (req, res) => {

  const userId = req.cookies.user_id;
  res.render('newpost',userId);
});


app.get('/', (req, res) => {
  res.render('index');
});


// app.get('/post', (req, res) => {
//   const userId = req.cookies.user_id;
//   res.render('post', userId);
// });

app.post('/users', (req, res) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password){
    res.status(400).send('Please Provide an email AND a password');
  }

  res.render('index');

})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

