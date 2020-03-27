const db = require('../data/dbConfig');

const getUsers = () => {
  db('users');
};

const findByUser = (username) => {
  db('users')
    .where({ username })
    .first();
};

module.exports = { getUsers, findByUser };
