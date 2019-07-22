
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: "user",
          password: "pass",
          email: "email@email.com",
          birthdate: "11/11/1111"
        },
        {
          id: 2,
          username: "username",
          password: "pass2",
          email: "email2@email.com",
          birthdate: "11/11/1111"
        },
        {
          id: 3,
          username: "user3",
          password: "pass3",
          email: "email3@email.com",
          birthdate: "11/11/1111"
        }
      ]);
    });
};
