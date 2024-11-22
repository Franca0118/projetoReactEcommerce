// sync.js
const sequelize = require('./config/config');
const usuario = require('./models/usuario');
const produto = require('./models/produtos');
sequelize.sync()