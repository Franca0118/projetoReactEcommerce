// sync.js
const sequelize = require('./config/config');
const usuario = require('./models/usuario');

sequelize.sync()