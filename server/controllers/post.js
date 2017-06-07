const {User} = require('../db/models/user');
const {Post} = require('../db/models/post');
const {Genre} = require('../db/models/genre');

exports.addPost = function (req, res) {

  Post.create(req.body).then(post => {
      if (req.body.newGenreArray) {
        const newGenreArray = req.body.newGenreArray;

        for(let i = 0; i < newGenreArray.length; i++) {
          const newGenre = newGenreArray[i];
          const genre = new Genre({genre: newGenre});

          genre.save();
        }
      }

      User.findOne({username: req.user.username}).then(user => {
        if (!user) { return Promise.reject};

        user.posts.push(post);
        user.save().then((data) => {
          res.send(post);
        })
      })
  }).catch (e => {
    res.status(400).send(e);
  });
}

exports.getUserPosts = function (req, res) {
  User.findById(req.user._id).populate('posts').exec(function (err, user) {
    if (err) { return next(err); }
    res.send(user.posts);
  })
}
