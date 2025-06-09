const config = require('../config/connection');

module.exports = async () => {
  await config.sync();
}