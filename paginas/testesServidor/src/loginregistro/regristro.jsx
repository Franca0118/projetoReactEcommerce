import React, { useState } from "react";


// npm i react-router-dom
import { useNavigate } from 'react-router-dom';
// npm i axios
// axios é uma biblioteca do recat usada para interpretar as requisisoes
import axios from 'axios';

export default () => {

    let [ email, setemail] = useState("")
    let [ usuario, setusuario] = useState("")
    let [ senha, setsenha] = useState("")
    let [ urlImg, seturlImg] = useState("")
   
    const navegar = useNavigate()

    async function cadastrar()
    {
        
        // 3000 é a porta que esta no index
        // bd/ foi a rota que esta em app.use('/usuario/', rotaDosUsuarios);
        // /criarNovo esta na rota de usuarios, usada para criar um novo usuario com 4 parametros
        // nomeados corretamente
            await axios.post("http://localhost:3000/usuario/criarNovo", {
                usuario,    
                senha, 
                email,
                urlImg
            })
           
        
           

    }


    // A pagina fica em branco, repare na url pare ver o que esta la, note a criacao dos testes no banco
    // e /PaginaCasoSejaCriadoComSucesso na url
    // f5 faz a criacao de varios itens
    
   
    return (
        
        <div className="login-container">
        <div className="login-box">
            <h1>CADASTRO</h1>
            <form onSubmit={()=>{
                cadastrar()
                navegar('/')
            }}>
                <div className="textbox">
                    <input type="email" placeholder="Email" required onInput={(e)=>{
                        setemail(e.target.value)
                    }}/>
                    <input type="text" placeholder="Usuario" required onInput={(e)=>{
                        setusuario(e.target.value)
                    }}/>
                    <input type="password" placeholder="Senha" required onInput={(e)=>{
                        setsenha(e.target.value)
                    }}/>
                    <input type="text" placeholder="URL da foto" required onInput={(e)=>{
                        seturlImg(e.target.value)
                    }}/>
                </div>
                <input type="submit" value="CRIAR"/>
            </form>
            <div className="footer">
                <p>ja tem conta? <a href="/login">logar</a></p>
            </div>

            
        </div>
    </div>
    )
}