const helmet = require('helmet');

module.exports = (app, express) => {
  app.use(helmet())
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};