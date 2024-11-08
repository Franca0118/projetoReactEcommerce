
const express = require('express');
const usuarios = require('../models/usuario');
const router = express.Router();
const encriptador = require('bcryptjs')
const authMiddleware = require('../autentificador/autentificador.js')
const jwt = require('jsonwebtoken');




router.post('/criarNovo', async (req, res) => {
// codigo basico, sem tratamento de erro
  const {usuario, senha, email} = req.body
  const senhaEnc = await encriptador.hash(senha, 10)

  await usuarios.create({usuario, senha:senhaEnc, email})
});

router.post('/acharum', async (req, res) => {
    // codigo basico, sem tratamento de erro
      const {email,senha} = req.body
      const usuarioAchado = await usuarios.findOne({where: {email} })
    
    if (!encriptador.compare(senha, usuarioAchado.senha)) return res.status(400).json({message: "senha incorreta"})


    const token = jwt.sign({ id: usuarioAchado.id, cargo: usuarioAchado.cargo }, 'secreto', { expiresIn: '1h' });
    res.json({ token, cargo: usuarioAchado.role });

});

router.post('/alterar/:id', async (req, res) => {
  // codigo basico, sem tratamento de erro
    const {usuario, senha, email} = req.body
    const {id} = req.params
    const usuarioAchado = await usuarios.findOne({where: {id} })
    usuarioAchado.update({usuario, senha, email})
  
  


  

});


router.post('/atualizarUsuario',authMiddleware, async (req, res) => {
    
    console.log("ELE ESTA LOGADO!")


});

module.exports = router;
