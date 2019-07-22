
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          post: "This is a test post",
          user_id: 2
        },
        {
          id: 2,
          post: "lorem",
          user_id: 1
        },
        {
          id: 3,
          post: "Test post",
          user_id: 1
        },
        {
          id: 4,
          post: "Another test post",
          user_id: 3
        },
        {
          id: 5,
          post: "More test posts",
          user_id: 2
        },
        {
          id: 6,
          post: "Testing this post",
          user_id: 1
        },
        {
          id: 7,
          post: "Here is a test post",
          user_id: 3
        }
      ]);
    });
};
