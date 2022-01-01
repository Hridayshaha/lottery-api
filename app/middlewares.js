// Module Import
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Built-in middlware
const middlewares = [
    morgan("dev"),
    cors(),
    express.json(),
    express.urlencoded({extended: true}),
];

// Module exports
module.exports = middlewares;