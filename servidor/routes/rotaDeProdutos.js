
const express = require('express');
const produtos = require('../models/produtos.js');
const router = express.Router();
const authMiddlewareADM = require('../autentificador/autentificadorADM.js')
const authMiddlewareUSER = require('../autentificador/autentificadorUSER.js')
const jwt = require('jsonwebtoken');




router.post('/criarNovo',authMiddlewareUSER , async (req, res) => {
  res.json({ola:"Ola"})

});





module.exports = router;
