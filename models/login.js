const db = require('../data/dbConfig');

const findUserByUsername = (user) => db('users').where({ user }).first();

module.exports = findUserByUsername;
