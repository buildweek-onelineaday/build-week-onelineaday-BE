const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const registerRouter = require('../controllers/register');
const loginRouter = require('../controllers/login');
const usersRouter = require('../controllers/users');
const postsRouter = require('../api/routes/postsRouter');
const {authenticate} = require('../auth/index')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/users', authenticate, usersRouter);
server.use('/posts', authenticate, postsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Up' });
});

module.exports = server;
