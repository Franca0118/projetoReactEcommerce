
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

module.exports = sequelize.define('produtos', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  time: {
    type: DataTypes.TEXT,
  },
  preco: {
    type: DataTypes.TEXT,
  },
  urlImg: {
    type: DataTypes.TEXT,
  },
  estoque: {
    type: DataTypes.NUMBER,
  }
}, {
  timestamps: true,
});


