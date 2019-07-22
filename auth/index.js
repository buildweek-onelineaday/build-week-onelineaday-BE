const bcrypt = require('bcryptjs');
const User = require('../models/users');
const jwt = require('jsonwebtoken');

const {jwtKey} = require('../.config/secrets')

// const jwtKey = process.env.JWT_SECRET || 'add a .env file to root of project with the JWT_SECRET Variable'

const hash = (req, res, next) => {
  //save credentials to object variable

  const credentials = req.body;
  //hash and salting password with bcrypt
  const hash = bcrypt.hashSync(credentials.password, 14);

  //saving password value to hashed and salted password
  credentials.password = hash;

  // move on to save the user.
  next();
};

const validate = (req, res, next) => {
  //save credentials to object variable
  const credentials = req.body;
  // find the user in the database by it's username then
  if (
    !credentials.username ||
    !bcrypt.compareSync(credentials.password, user.password)
  ) {
    return res.status(401).json({ error: 'Incorrect credentials' });
  }

  // the user is valid, continue on
  next();
};
const validateUser = async (req, res, next) => {
  let { user } = req.headers;
  try {
    let user = await User.findByUser(user);
    if (data) {
      req.user = user;
      next();
    } else {
      res.status(404).json({ message: `Cannot verify username` });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, jwtKey, options);
}

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
};
module.exports = { hash, validate, validateUser, generateToken, authenticate };
