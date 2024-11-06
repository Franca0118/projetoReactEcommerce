
const { Sequelize } = require('sequelize')
// SQL LITE
module.exports = new Sequelize("sqlite:./bd/banco.db")
