const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../../../config');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    unique: true,
    trim: true,
    require: true
  },
  password: {
    type: String,
    minlength: 6,
    trim: true,
    require: true
  },
  gender: {
    type: String,
    require: true
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

// PARA MA OVERRIDE YUNG MA SE SEND NA DATA PAPUNTANG API
userSchema.methods.toJSON = function () {
  const user = this;

  const userInfo = {
    id: user._id,
    username: user.username,
    gender: user.gender,
    email: user.email
  };

  return userInfo;
}

// PARA MAKA GENERATE NG TOKEN
userSchema.methods.generateAuthToken = function () {
  const user = this;
  const access = 'auth';

  const token = jwt.sign({
    _id: user._id.toHexString(),
    access
  }, config.secret).toString();

  console.log('token', token);

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

// PARA HANAPIN YUNG TOKEN
userSchema.statics.findByToken = function (token) {
  const user = this;
  let decoded;

  try {
    decoded = jwt.verify(token, config.secret);
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

// PARA SA LOGIN
userSchema.statics.findByCredentials = function (username, password) {
  var User = this;

  return User.findOne({username}).then(user => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, function (err, isMatch) {
        if (isMatch) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
};

// Before saving hash the password
userSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


const User = mongoose.model('User', userSchema);

module.exports  = {User};
