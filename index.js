const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
require('dotenv').config()

app.use(express.static('public'))

app.use(bodyParser.json())

app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
    })
    .then(() => res.sendStatus(200))
})

app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})

