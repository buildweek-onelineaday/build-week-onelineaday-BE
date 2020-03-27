exports.up = (knex) => {
  knex.schema.createTable('users', (tbl) => {
    tbl.increments();
    tbl
      .string('username', 255)
      .notNullable()
      .unique();
    tbl.string('password', 255).notNullable();
    tbl
      .string('email', 255)
      .notNullable()
      .unique();
    tbl.string('phone number').unique();
    tbl.date('birthdate').notNullable();
  });
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('users');
};
