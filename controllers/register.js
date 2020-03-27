const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../models/register');
// const auth = require('../auth/authenticate');
const registerRouter = express.Router();

const addUser = db;
// const hash = auth;

registerRouter.use((req, res, next) => {
  next();
});

registerRouter.post('/', async (req, res) => {
  try {
    const credentials = req.body;
    // hash and salting password with bcrypt
    const hash = bcrypt.hashSync(credentials.password, 2);
    // saving password value to hashed and salted password
    credentials.password = hash;
    const user = await addUser(credentials);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = registerRouter;
