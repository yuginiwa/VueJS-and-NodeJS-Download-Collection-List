const mongoose = require('mongoose');

const config = require('../../../config');

var genreSchema = new mongoose.Schema({
  genre: {
    type: String,
    minlength: 3,
    unique: true,
    trim: true
  }
});


const Genre = mongoose.model('Genre', genreSchema);

module.exports  = {Genre};
