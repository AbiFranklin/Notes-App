//Load server
const createError = require('http-errors');
const express = require('express')
const app = express()
const morgan = require('morgan')
const cookieParser = require('cookie-parser');
const mysql = require('mysql')


app.use(express.json());
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('short'))



//Connect to database
const connection = mysql.createConnection({
    host: 'abigaylefranklin.com',
    port: 3306,
    user: 'franklin_abi',
    password: 'chedder',
    database: 'franklin_test'
})

//Route handling
app.get("/users", (req, res) => {
    connection.query("SELECT * FROM user", (err, rows, fields) => {
        res.json(rows)
    })
})

app.post("/createUser", (req, res) => {
    const username = req.body.username
    const queryString = `INSERT INTO user (username) VALUES ('${username}')`
    connection.query(queryString, (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new user: " +  err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted a new user with id: " + results.insertId)
        res.end()
    })
})

app.get("/users/:id", (req, res) => {
    connection.query(`SELECT * FROM user WHERE id=${req.params.id}`, (err, rows, fields) => {
        res.json(rows)
    })
})

app.get("/posts", (req, res) => {
    connection.query("SELECT * FROM posts", (err, rows, fields) => {
        res.json(rows)
    })
})

app.post("/createPost", (req, res) => {
    const title = req.body.title
    const text = req.body.text
    const user_id = req.body.user_id
    const queryString = `INSERT INTO posts (title, text, user_id) VALUES ('${title}', '${text}', '${user_id}')`
    connection.query(queryString, (err, results, fields) => {
        if (err) {
            console.log("Failed to insert new post: " +  err)
            res.sendStatus(500)
            return
        }

        res.status(200).send({id: results})
        res.end()
    })
})

app.get("/posts/:id", (req, res) => {
    connection.query(`SELECT * FROM posts WHERE id=${req.params.id}`, (err, rows, fields) => {
        if(err) {
            console.log('Internal Server Error', err)
            res.sendStatus(500)
        } else {
            if (rows === []) {
                res.send("No Such Post")
            } else {
                res.json(rows)
            }
        }
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sever up and running on port ${PORT} ...`)
})
