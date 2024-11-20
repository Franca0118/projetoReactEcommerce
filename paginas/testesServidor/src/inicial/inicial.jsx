
import React, { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default () => {
    let [user, setUser] = useState([])
    let [user22, setUser2] = useState("gwagaw")
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
    
    useEffect(()=>{
        verToken()
    },[])




    return <div className="paginaInicial">
    <header>
    <div className="logo"><a href="#"><img src="logo.png"/></a></div>
    <nav>
        <a href="#">menu</a>
        <a href="#">menu</a>
        <a href="#">menu</a>
        <a href="#">menu</a>
    </nav>
    <div className="search">
        <input type="text" placeholder="Buscar produtos..."/>
    </div>
    <div className="icons">
        {logado}
        <span><CiShoppingCart className="icon2" /></span>
    </div>
    </header>
    
    </div>




}