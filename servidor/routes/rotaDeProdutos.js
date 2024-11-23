
const express = require('express');
const produtos = require('../models/produtos.js');
const router = express.Router();
const authMiddlewareADM = require('../autentificador/autentificadorADM.js')
const authMiddlewareUSER = require('../autentificador/autentificadorUSER.js')
const jwt = require('jsonwebtoken');




router.post('/criarNovo',authMiddlewareUSER , async (req, res) => {
    const {nome,descricao,time,preco,urlImg,estoque} = req.body
    await produtos.create({nome,descricao,time,preco,urlImg,estoque}).then(()=>{
      res.json({msg: "Criado com sucesso"})
    })
});


router.post('/editar/:id',authMiddlewareUSER , async (req, res) => {
    const {id} = req.params
    const produto = await produtos.findOne({where: {id}})
    if (!produto)
    {
      return res.json({msg: "erro ao encontrar produto"})
    }

    
    const {nome,descricao,time,preco,urlImg,estoque} = req.body
      
    await produto.update({nome,descricao,time,preco,urlImg,estoque}).then(()=>{
    return res.json({msg:"Produto alterado com sucesso"})
    })
     

     

});

router.get('/deletarprodutos/:id',authMiddlewareUSER , async (req, res) => {
  const {id} = req.params
  const produto = await produtos.findOne({where: {id}})
  produto.destroy()
});


router.get('/getAll' , async (req, res) => {
  const todos = await produtos.findAll()
   return res.json( {todos} )
});

router.get('/getOne/:id' , async (req, res) => {

const {id} = req.params
  const produto = await produtos.findOne({where: {id}})
   return res.json( {produto} )
});


module.exports = router;
