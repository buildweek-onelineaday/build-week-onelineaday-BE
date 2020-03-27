exports.up = (knex) => {
  knex.schema.createTable('posts', (tbl) => {
    tbl.increments();
    tbl.string('post', 320).notNullable();
    tbl.timestamps(true, true);

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('posts');
};
