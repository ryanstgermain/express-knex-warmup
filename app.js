const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const knex = require('knex');
const config = require("./knexfile");
const queries = require('./queries.js');

//app.get("/", function(req, res) {
    //res.send("boi");
//})

app.get("/", function(req, res) {
    queries.getAll().then(response => res.send(response))
})

app.get("*", function(req, res) {
    res.send("Page not found: 707")
})

app.listen(3000, function() {
    console.log("Listening on ${port}");
    console.log("")
})

module.exports = app
