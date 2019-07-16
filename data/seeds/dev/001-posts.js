
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit arcu, convallis id suscipit non."},
        {id: 2, post: "Donec vehicula scelerisque ligula ut malesuada. Suspendisse ut feugiat nulla. Sed diam nulla, congue pretium leo at, tincidunt ornare nisi. Morbi ullamcorper lectus sed est."},
        {id: 3, post: "Nullam eu leo accumsan dui congue tincidunt non ac felis. Nullam imperdiet convallis nibh ac porttitor. Integer sit amet ullamcorper nulla. Proin."}
      ]);
    });
};
