import React from "react";
import '../cssgeral.css'





export default () => {
    return (
        <div className="form-container">
        <h2>Alterar Perfil</h2>
        <form action="/alterar-perfil" method="POST">
            <div className="input-group">
                <label for="username">Usuário</label>
                <input type="text" id="username" name="username" placeholder="Novo nome de usuário" required/>
            </div>
            <div className="input-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Novo e-mail" required/>
            </div>
            <div className="input-group">
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Nova senha" required/>
            </div>
            <div className="form-footer">
                <button type="submit" className="btn-submit">Salvar alterações</button>
            </div>
        </form>
    </div>
    )
}