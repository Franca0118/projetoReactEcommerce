
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('carrinho', {
  produtoID: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  clienteID: {
    type: DataTypes.NUMBER,
  }
}, {
  timestamps: true,
});


