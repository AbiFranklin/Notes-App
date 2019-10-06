//Load server
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('short'))

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from the root")
})

app.get("/users", (req, res) => {
    let user = {id: 1, username: 'Abi'}
    res.json(user)
})

app.get("/posts", (req, res) => {
    console.log("Responding to posts route")
    res.send("List of posts")
})

//localhost:3003
app.listen(3003, () => {
    console.log("Sever up and running on port 3003 ...")
})