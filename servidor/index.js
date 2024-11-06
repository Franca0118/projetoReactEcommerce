// index.js
const express = require('express');
const cors = require('cors');

// IMPORTAR TODAS AS ROTAS QUE VAO SER USADAS
const rotaDosUsuarios = require('./routes/rotaDeUsuarios');

// DEPENDENCIAS USADAS NO SERVIDOR
const app = express();
app.use(cors());
// USADA PARA RETORNAR OS DADOS COMO JSON
app.use(express.json());

// AQUI TEMOS A BASE QUE USAREMOS NAS REQUISIÇÔES NO FRONT END
app.use('/bd/', rotaDosUsuarios);


// O LISTEN É USADO PARA SUBIR O SERVIDOR NA MAQUINA
app.listen(3000, () => console.log(`Servidor rodando na porta 3KK`));
