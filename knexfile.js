require('dotenv').config()


module.exports = {
    client: 'mysql',
    connection: {
      user: process.env.ADMINUSER,
      password: process.env.PASSWORD,
      database: 'franklin_test',
      host: process.env.HOST,
      port: process.env.PORT
    }
  } 

