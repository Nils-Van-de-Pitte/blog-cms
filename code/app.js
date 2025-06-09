const express = require('express');

const app = express();

// Middleware
require('./config/middleware')(app, express);

// Routes
// require('./config/routes')(app);

module.exports = app;
