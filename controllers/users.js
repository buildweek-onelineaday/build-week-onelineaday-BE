const express = require('express');
const db = require('../models/users');

const userRouter = express.Router();

const { getUsers } = db;


userRouter.use((req, res, next) => {
  next();
});

userRouter.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = userRouter;
