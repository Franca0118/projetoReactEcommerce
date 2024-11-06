
const express = require('express');
const usuarios = require('../models/usuario');
const router = express.Router();
const encriptador = require('bcryptjs')


router.post('/criarNovo', async (req, res) => {
// codigo basico, sem tratamento de erro
  const {usuario, senha, email, cargo} = req.body
  const senhaEnc = await encriptador.hash(senha, 10)

  await usuarios.create({usuario, senha:senhaEnc, email, cargo})
});

router.post('/acharum', async (req, res) => {
    // codigo basico, sem tratamento de erro
      const {email} = req.body
      const usuarioAchado = await usuarios.findOne({where: {email} })
      return res.status(200).json({usuarioAchado})
});

module.exports = router;
