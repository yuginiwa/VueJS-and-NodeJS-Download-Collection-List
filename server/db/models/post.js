const mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minlength: 3,
    trim: true
  },
  genres: {
    type: Array,
    require: true
  },
  image: {
    type: String,
    require: true,
    minlength: 3,
    trim: true
  },
  category: {
    type: String,
    require: true,
    minlength: 3,
    trim: true
  },
  plot: {
    type: String,
    require: true,
    minlength: 3,
    trim: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports  = {Post};
