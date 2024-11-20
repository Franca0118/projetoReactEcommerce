import React, { useEffect, useState } from "react";


// npm i react-router-dom
import { useNavigate } from 'react-router-dom';
// npm i axios
// axios é uma biblioteca do recat usada para interpretar as requisisoes
import axios from 'axios';

export default () => {

    let [ email, setemail] = useState("")
    let [ senha, setsenha] = useState("")
    const navegar = useNavigate()

    useEffect(()=>{
        try{
            const token = localStorage.getItem('token')
            const userLogado = token ? JSON.parse(atob(token.split('.')[1])) : null
            console.log(userLogado)
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: `Usuario logado, bem vindo ${userLogado.nome}`
              });
              navegar('/')

        }catch{
            localStorage.clear()
            console.log("local limpo")
        }

    },[])
    async function fazerLogin()
    {
        
        // 3000 é a porta que esta no index
        // bd/ foi a rota que esta em app.use('/bd/', rotaDosUsuarios);
        // /criarNovo esta na rota de usuarios, usada para criar um novo usuario com 4 parametros
        // nomeados corretamente
            const user = await axios.post("http://localhost:3000/bd/acharum", {
                email,
                senha
            })
            const {token} = user.data
            // Armazenar o token no localStorage ou sessionStorage
            await localStorage.clear()
            await localStorage.setItem('token', token);
           
            navegar('/')
    }


    // A pagina fica em branco, repare na url pare ver o que esta la, note a criacao dos testes no banco
    // e /PaginaCasoSejaCriadoComSucesso na url
    // f5 faz a criacao de varios itens
    
   
    return (
        
        <div className="login-container">
        <div className="login-box">
            <h1>Login</h1>
            <form onSubmit={
                event.preventDefault()
            }>
                <div className="textbox">
                    <input type="text" placeholder="Email" name="usuario" required onInput={(e)=>{
                        setemail(e.target.value)
                    }}/>
                    <input type="text" placeholder="Senha" name="usuario" required onInput={(e)=>{
                        setsenha(e.target.value)
                    }}/>
                </div>
                
            </form>
            

            <input type="submit" value="ENTRAR" onClick={()=>{
                    fazerLogin()
                    
                }}/>

                <div className="footer">
                <p>nao tem conta? <a href="/registro">cadastrar</a></p>
            </div>
        </div>
    </div>
    )
}