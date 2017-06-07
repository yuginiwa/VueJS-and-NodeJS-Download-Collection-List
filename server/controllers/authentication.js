
const {User} = require('../db/models/user');

// ++++++++++++++++++++++++++  //
//          SIGN IN           //
// +++++++++++++++++++++++++ //

exports.signin = function (req, res, next) {
  const { username, password } = req.body;

  User.findByCredentials(username, password).then(user => {
    return user.generateAuthToken().then(token => {
      res.header('x-auth', token).send({user, token});
    });
  }).catch (e => {
    res.status(400).send({message: 'Invalid username and password'});
  });
}


// ++++++++++++++++++++++++++  //
//          Sign UP           //
// +++++++++++++++++++++++++ //
exports.signup = function (req, res) {
  const { username, password, email, gender } = req.body;

  const user = new User({username, password, email, gender});
  user.save().then(() => {
    return user.generateAuthToken();
  }).then(token => {
    res.header('x-auth', token).send({user, token});
  }).catch(e => {
    res.status(400).send(e);
  });
};
