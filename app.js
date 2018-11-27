const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000

// We will be writing our routes in this file
// example: app.get()

const { Client } = require('pg')
const client = new Client()

await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

app.get("/", function(req, res) {
    res.send("boi");
})

app.get("*", function(req, res) {
    res.send("Page not found: 707")
})

app.listen(3000, function() {
    console.log("Serving on port 3000");
})

module.exports = app
