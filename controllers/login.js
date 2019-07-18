const express = require('express');
const bycrypt = require('bcryptjs');
const db = require('../models/login');
const User = require('../models/users');

const loginRouter = express.Router();

loginRouter.use((req, res, next) => {
  console.log('loginRouter working');
  next();
});

loginRouter.post('/', async (req, res) => {
  let { username, password } = req.headers;

  try {
    let user = await User.findByUser(username);
    console.log(user);
    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({ message: `Greetings ${user.username}!` });
    } else {
      res.status(401).json({ message: `Incorrect credentials` });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = loginRouter;
