
const express = require('express');
const carrinho = require('../models/carrinho.js');
const router = express.Router();
const authMiddlewareADM = require('../autentificador/autentificadorADM.js')
const authMiddlewareUSER = require('../autentificador/autentificadorUSER.js')
const jwt = require('jsonwebtoken');





router.post('/criarNovo',authMiddlewareUSER , async (req, res) => {
    const {produtoID,clienteID} = req.body
    await carrinho.create({produtoID,clienteID}).then(()=>{
      res.json({msg: "Criado com sucesso"})
    })
});

router.get('/carrinhoByID/:id',authMiddlewareUSER , async (req, res) => {
    const {id} = req.params
    await carrinho.findAll({where: {clienteID:id}}).then((a)=>{
    console.log(a)
      res.json({a})
    })
});

router.delete('/carrinhoByID/:id',authMiddlewareUSER , async (req, res) => {
    const {id} = req.params
    const prods = await carrinho.findAll({where: {clienteID:id}})
    prods.forEach(a => a.destroy())
});



module.exports = router;
