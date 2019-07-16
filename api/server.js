const express = require('express');
const helmet = require('helmet');
const postsRouter = require('./routes/postsRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/posts', postsRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "API is Up"})
})

module.exports = server;