
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('usuario', {
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.TEXT,
  },
  urlImg: {
    type: DataTypes.TEXT,
  },
  cargo: {
    type: DataTypes.ENUM('cliente', 'adm'),
    defaultValue: 'cliente',
  }
}, {
  timestamps: true,
});


