//Load server
const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
require('dotenv').config()

app.use(morgan('short'))

//Connect to database
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ADMINUSER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: 'franklin_test'
})

//Route handling
app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from the root")
})

app.get("/users", (req, res) => {
    connection.query("SELECT * FROM user", (err, rows, fields) => {
        res.json(rows)
    })
})

app.get("/users/:id", (req, res) => {
    const connection = 
    res.json(req.params.id)
})

app.get("/posts", (req, res) => {
    connection.query("SELECT * FROM posts", (err, rows, fields) => {
        res.json(rows)
    })
})

//localhost:3003
app.listen(3003, () => {
    console.log("Sever up and running on port 3003 ...")
})