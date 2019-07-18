const bcrypt = require('bcryptjs');

const User = require('../models/users');

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
module.exports = { hash, validate, validateUser };
