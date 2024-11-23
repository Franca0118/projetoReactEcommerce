
const express = require('express');
const usuarios = require('../models/usuario');
const router = express.Router();
const encriptador = require('bcryptjs')
const authMiddlewareADM = require('../autentificador/autentificadorADM.js')

const authMiddlewareUSER = require('../autentificador/autentificadorUSER.js')
const jwt = require('jsonwebtoken');




router.post('/criarNovo' , async (req, res) => {
// codigo basico, sem tratamento de erro
  const {usuario, senha, email, urlImg} = req.body
  const senhaEnc = await encriptador.hash(senha, 10)

  await usuarios.create({usuario, senha:senhaEnc, email, urlImg})
});

router.post('/acharum', async (req, res) => {
    // codigo basico, sem tratamento de erro
      const {email,senha} = req.body
      const usuarioAchado = await usuarios.findOne({where: {email} })
    
    if (!encriptador.compare(senha, usuarioAchado.senha)) return res.status(400).json({message: "senha incorreta"})
    


    const token = jwt.sign({ id: usuarioAchado.id, cargo: usuarioAchado.cargo,email:usuarioAchado.email, nome: usuarioAchado.usuario , img:usuarioAchado.urlImg }, 'secreto', { expiresIn: '1h' });
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."eyJpZCI6MSwiY2FyZ28iOiJjbGllbnRlIiwiaWF0IjoxNzMxMzUzODYxLCJleHAiOjE3MzEzNTc0NjF9".DEN-Oi-40o5Ig4EV0KXvHq7dZS-wAOUTXKovM3ZFQAI

    // o cargo fica no token entre aspas, que é desencriptado pelo atob(token.split('.')[1]))

    res.json({ token });

});

router.post('/alterar/:id', async (req, res) => {
    const { usuario, email, urlImg } = req.body

    const id = req.params.id
    const user = await usuarios.findOne({where: { id }})
    user.update({usuario, email, urlImg})

    res.status(200).json({user})
  
});

router.get('/verify',authMiddlewareUSER , async (req, res) => {
  
});

router.get('/deletarUser/:id',authMiddlewareUSER , async (req, res) => {
  const {id} = req.params
  const user = await usuarios.findOne({where: {id}})
  user.destroy()
});

module.exports = router;
