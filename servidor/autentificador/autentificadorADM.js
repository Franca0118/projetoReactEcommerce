

// este codigo tem a funcao de proteger as rotas
// como por exemplo um usuario nao logado tentar acessar paginas de compra


const jwt = require('jsonwebtoken');

module.exports = () => {
        return (req, res, next) => {

        // o authorization parece com algo assim:
        // const authorization = "Bearer abc12345";
        // por isso separar por espaço e pegar o segundo valor

        const token = req.headers.authorization?.split(' ')[1];
        const cargos = ['adm']

        // caso aja problemas para recuperar o token em authorization, ele para o codigo e retorna
        if (!token) return res.status(401).json({ message: 'Token não fornecido' });

        // Asynchronously verify given token using a secret or a public key 
        // to get a decoded token token - JWT string to verify secretOrPublicKey - 
        // A string or buffer containing either the secret for HMAC algorithms, 
        // or the PEM encoded public key for RSA and ECDSA. If jwt.verify is called 
        // asynchronous, secretOrPublicKey can be a function that should fetch the 
        // secret or public key [options] - Options for the verification callback - 
        // Callback to get the decoded token on
        jwt.verify(token, 'secreto', (err, user) => {
        console.log(token)
        console.log(user)
        if (err) return res.status(401).json({ message: 'Token inválido' });

        if (cargos.length && !cargos.includes(user.role)) {
            return res.status(403).json({ error: 'Acesso negado' });
        }

        req.userId = user.id;
        next();
        // O next() é uma função que pertence ao fluxo de middleware do Express. 
        // Quando usada em uma função de middleware, ela diz ao Express para passar 
        // o controle para o próximo middleware na sequência. Basicamente, ele permite 
        // que a solicitação continue seu caminho até atingir o endpoint final ou outro 
        // middleware específico.

        //Nesse caso ele volta a executar a logica estabelecida no rotaDeUsuarios
        });
    }
};