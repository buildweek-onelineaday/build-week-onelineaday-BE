const express = require('express');
const bcrypt = require('bcryptjs');
// const db = require('../models/login');
const User = require('../models/users');
const auth = require('../auth')

const loginRouter = express.Router();

loginRouter.use((req, res, next) => {
  next();
});

loginRouter.post('/', async (req, res) => {
  const { username, password } = req.headers;

  try {
    const user = await User.findByUser(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = auth.generateToken(user);
      res.json({ message: `Greetings ${user.username}!`, your_token: token, user_id: user.id });
    } else {
      res.status(401).json({ message: 'Incorrect credentials' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = loginRouter;
