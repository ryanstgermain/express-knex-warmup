const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000
const knex = require('knex');
const config = require("./knexfile");
const queries = require('./queries.js');
const cors = require('cors')

app.use(bodyParser.json())

app.get("/", function(req, res) {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', function(req, res) {
    queries.getById(req.params.id).then(students => res.send(students))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students))
})

app.get("*", function(req, res) {
    res.send("Page not found: 707")
})

app.listen(port, function() {
    console.log(`Listening on ${port}`);
})

module.exports = app
