const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
  //sub: subject (who does this token belong to)
  //iat: issued at time
}

exports.signin = function (req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function (req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide email and password' });
  }

  //see if user exists
  User.findOne({ email: email }, function (err, existingUser) {
    if (err) {
      return next(err);
    }
    //if user with email exists return error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }
  });

  //if a user with a fresh email dne create a new user

  const user = new User({
    email: email,
    password: password,
  });

  user.save(function (err) {
    if (err) {
      return next(err);
    }
    //respond to request inidcating the user was created

    res.json({ token: tokenForUser(user) });
  });
};
