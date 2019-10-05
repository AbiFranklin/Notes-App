# Notes-App
Front &amp; Back

From initial project
Database tables:
1. users - id, username
2. posts - id, title, text, user_id (link to users.id)

CRUD operations:
getAll: returns ('posts').join('users', 'posts.user_id', 'users.id').select('posts.id', 'posts.title', 'posts.text', 'users.username').orderBy('posts.id')

getOne(id): returns ('posts').join('users', 'posts.user_id', 'users.id').where('posts.id', id).select('posts.title', 'posts.text', 'users.username')

createPost(post): returns ('posts').insert(post, '*')

editPost(id, post): returns ('posts').where('id', id).update(post, '*')

delPost(id): returns ('posts').where('id', id).del()

Adding with this version:
createUser(user): returns ('users').insert(user, '*')

getAllUsers: returns .select().from('users')