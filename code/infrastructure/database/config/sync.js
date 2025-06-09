module.exports = async () => {
  await require('../models/user').sync();
};