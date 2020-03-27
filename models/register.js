const db = require('../data/dbConfig');

const addUser = (user) => {
  db('users').insert(user);
};

module.exports = addUser;
