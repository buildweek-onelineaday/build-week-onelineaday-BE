const db = require('../data/dbConfig');

const addUser = user => {
  return db('users').insert(user);
};

module.exports = addUser;
