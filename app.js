//Load server
const express = require('express')
const app = express()

app.get("/", (req, res) => {
    console.log("Responding to root route")
    res.send("Hello from the root")
})

//localhost:3003
app.listen(3003, () => {
    console.log("Sever up and running on port 3003 ...")
})