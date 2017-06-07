var express = require('express');
var router = express.Router();

const Authentication = require('../controllers/authentication');
const post = require('../controllers/post');
const genre = require('../controllers/genre');

const {findUsername, findEmail} = require('../middleware/findUser');
const {authenticate} = require('../middleware/authenticate');

//Models
const Post = require('../db/models/post');



// ============================ //
//          ACCOUNT ROUTES      //
// ============================ //
router.post('/signup', findUsername, findEmail, Authentication.signup);
router.post('/login', Authentication.signin);


// ============================ //
//          POST ROUTES         //
// ============================ //
router.post('/post', authenticate, post.addPost);
router.get('/posts', authenticate, post.getUserPosts);

// ============================ //
//         GENRE ROUTES         //
// ============================ //
router.get('/genres', authenticate, genre.getGenres);

// Return router
module.exports = router;
