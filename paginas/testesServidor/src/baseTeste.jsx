import React, { useState } from "react";
import './cssgeral.css'

// npm i react-router-dom
import { useNavigate } from 'react-router-dom';
// npm i axios
// axios é uma biblioteca do recat usada para interpretar as requisisoes
import axios from 'axios';

export default () => {

    let [usuario, setusuario] = useState("teste1")
    let [senha, setsenha] = useState("teste2")
    let [email, setemail] = useState("teste3")
    let [cargo, setcargo] = useState("teste4")
    const navegar = useNavigate()

    async function CriarNovosUsuarios()
    {
        
        // 3000 é a porta que esta no index
        // bd/ foi a rota que esta em app.use('/bd/', rotaDosUsuarios);
        // /criarNovo esta na rota de usuarios, usada para criar um novo usuario com 4 parametros
        // nomeados corretamente
            await axios.post("http://localhost:3000/bd/criarNovo", {
                usuario, 
                senha, 
                email
            })

    }


    // A pagina fica em branco, repare na url pare ver o que esta la, note a criacao dos testes no banco
    // e /PaginaCasoSejaCriadoComSucesso na url
    // f5 faz a criacao de varios itens
    
   
    return (
        
        <div class="login-container">
        <div class="login-box">
            <h1>CADASTRO</h1>
            <form>
                <div class="textbox">
                    <input type="text" placeholder="Usuário" name="usuario" required onInput={(e)=>{
                        setusuario(e.target.value)
                    }}/>
                </div>
                <div class="textbox">
                    <input type="text" placeholder="Email" name="senha" required onInput={(e)=>{
                        setemail(e.target.value)
                    }}/>
                </div>
                <div class="textbox">
                    <input type="text" placeholder="Senha" name="senha" required onInput={(e)=>{
                        setsenha(e.target.value)
                    }}/>
                </div>
                <input type="submit" value="CRIAR" onClick={()=>{
                    CriarNovosUsuarios()
                }}/>
            </form>
            <div class="footer">
                <p>ja tem conta? <a href="/login">login</a></p>
            </div>
        </div>
    </div>
    )
}