const {Genre} = require('../db/models/genre');

exports.getGenres = function (req, res) {
  Genre.find().then(genres => {
    res.send(genres);
  });
};
