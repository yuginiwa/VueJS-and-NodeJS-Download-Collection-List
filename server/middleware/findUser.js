const {User} = require('../db/models/user');

const findUsername = (req, res, next) => {
  var username = req.body.username;

  User.findOne({username})
    .then(existingUsername => {
      if (existingUsername) {
        return Promise.reject();
      }

      next();
    })
    .catch((e) => {
      res.status(401).send({message: 'Username is already exist'});
    });
};

const findEmail = (req, res, next) => {
  var email = req.body.email;

  User.findOne({email})
    .then(existingEmail => {
      if (existingEmail) {
        return Promise.reject();
      }

      next();
    })
    .catch((e) => {
      res.status(401).send({message: 'Email is already exist'});
    });
};

module.exports = {findUsername, findEmail};
