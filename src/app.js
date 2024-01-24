const express = require('express');
const router = require('./routes')
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.use('/v1', router);
module.exports = app;