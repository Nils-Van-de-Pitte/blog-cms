const express = require('express');
const sync = require('./infrastructure/database/config/sync');

const app = express();

// Middleware
require('./config/middleware')(app, express);

// Routes
// require('./config/routes')(app);

// Models
sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

module.exports = app;
