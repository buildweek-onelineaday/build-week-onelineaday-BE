const db = require('../data/dbConfig');

const getUsers = () => {
  return db('users');
};

const findByUser = username => {
  return db('users')
    .where({ username })
    .first();
};

module.exports = { getUsers, findByUser };
