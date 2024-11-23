
import React, { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default () => {
    let [user, setUser] = useState([])
    let [user22, setUser2] = useState("gwagaw")
    let [todosProdutos, setTodos] = useState([])
    const nagevar = useNavigate()

    let [logado, setLogado] = useState(
        () => {
            return ( <span onClick={()=>{
                nagevar('/login')
            }}>
                <LuLogIn className="icon2"/> 
                <h1>Faça seu login</h1>
                </span>
            )
        }
    )


    let verToken = async ()=>{
      
            const token = localStorage.getItem('token');
            const user2 = token ? JSON.parse(atob(token.split('.')[1])) : false
            if (user2)
            {
                setLogado(()=>{
                    return(
                    <span onClick={()=>{
                        nagevar('/perfil')
                    }}>
                        <CiUser className="icon2"/> <h1>Bem vindo(a) {user2.nome}</h1>
                    </span>
                    )
                })
            } 
    }

    let todos = async () => {
      await axios.get("http://localhost:3000/produto/getAll").then((a)=>{
        setTodos(a.data.todos)
      })

       
    }
    
    useEffect(()=>{
        verToken()
        todos()
    },[])




    return <div className="paginaInicial">
    <header>
    <div className="logo"><a href="#"><img src="logo.png"/></a></div>
    <nav>
        <a href="#">menu</a>
        <a href="#">menu</a>
        <a href="#">menu</a>
        <a href="/adm">adm</a>
    </nav>
    <div className="search">
        <input type="text" placeholder="Buscar produtos..."/>
    </div>
    <div className="icons">
        {logado}
        <span><CiShoppingCart className="icon2" /></span>
    </div>
    </header>

    <h1>Produtos</h1>
    <section id="paginaPrincProd">
        
        {
            todosProdutos.length < 1 ? 
            "CARREGANDO" : 
            todosProdutos.map((a)=>{
                return (
                    <div onClick={()=>{
                        nagevar(`/produtoPag?idprod=${a.id}`)
                    }}>
                        <img src={a.urlImg} alt=""/>
                        <h2>{a.nome}</h2>
                        <h3>R${a.preco}</h3>
                        <p>{a.descricao}</p>
                    </div>
                )
            })
        }
    </section>
    </div>




}