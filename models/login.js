const db = require('../data/dbConfig');

const findUserByUsername = user => {
  return db('users')
    .where({ user })
    .first();
};

module.exports = findUserByUsername;
