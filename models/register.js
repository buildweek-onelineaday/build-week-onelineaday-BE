const db = require('../data/dbConfig');

const auth = require('../auth/index');

const addUser = user => {
  return db('users').insert(user);
};
