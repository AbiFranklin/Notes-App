exports.up = function (knex) {
    return knex.schema.createTable('posts', function (t) {
        t.increments();
        t.text('title');
        t.text('text');
        t.integer('user_id');
        t.foreign('user_id').references('user.id');
    })
  }
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts')
  }
