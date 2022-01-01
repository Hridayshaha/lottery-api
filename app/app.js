// Module Import 
const express = require('express')
const {error404, globalError} = require('./error')
// App Intailization
const app = express()

// Built-in middleware
app.use(require('./middlewares'))

// Routes
app.use(require('./route'))

// Error Handling
app.use(error404);
app.use(globalError);

// Module Exports
module.exports = app;