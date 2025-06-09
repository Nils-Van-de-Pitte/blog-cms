const config = require('../config/connection');
const {DataTypes} = require("sequelize");

const User = config.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: crypto.randomUUID(),
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});

module.exports = User;