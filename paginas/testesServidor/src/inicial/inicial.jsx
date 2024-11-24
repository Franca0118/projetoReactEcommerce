
import React, { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default () => {
    let [user, setUser] = useState([])
    let [user22, setUser2] = useState("gwagaw")
    let [todosProdutos, setTodos] = useState([])
    let [todosProdutos2, setTodos2] = useState([])
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
        setTodos2(a.data.todos)
        setTodos(a.data.todos)
      })

       
    }
    
    let time = (a)=>{
        document.querySelector("#pesquisaTime").value = a

        let prodss = []
        setTodos2(todosProdutos)
        if (document.querySelector("#pesquisaTime").value)
        {
            todosProdutos2.forEach((ab)=>{
                if (ab.time.toLowerCase().includes(document.querySelector("#pesquisaTime").value))
                {
                    prodss.push(ab)
                }
            })
            setTodos2(prodss)
        }
    }
    useEffect(()=>{
        verToken()
        todos()
    },[])




    return <div className="paginaInicial">
    <header>
    <div className="logo"><a href="/"><img src="logo.png"/></a></div>
    <nav>
        <a href="#">Times</a>
        <a href="#">Shorts</a>
        <a href="#">Jaquetas</a>
        <a href="/adm">adm</a>
    </nav>
    <div className="search">
        <input type="text" placeholder="Buscar produtos..." onInput={(b)=>{
        let prodss = []
        setTodos2(todosProdutos)
        if (b.target.value)
        {
            todosProdutos2.forEach((a)=>{
                if (a.nome.includes(b.target.value))
                {
                    prodss.push(a)
                }
            })
            setTodos2(prodss)
        }
        console.log(todosProdutos)
    }}/>
    </div>
    <div className="icons">
        {logado}
       <a href="/carrinho"> <span><CiShoppingCart className="icon2" /></span></a>
    </div>
    </header>

    <h1 id="prodH1">Produtos</h1> 
    <div className="IncPag">
    <input id="pesquisaTime" className="inputTime" placeholder="pesquisar por time" type="text" name=""  onChange={(b)=>{
        let prodss = []
        
        if (b.target.value.trim())
        {
            todosProdutos.forEach((a)=>{
                if (a.time.includes(b.target.value))
                {
                    prodss.push(a)
                }
            })
            setTodos2(prodss)
        } else{
            setTodos2(todosProdutos)
        }
    }}/>
    <img className="imgpagincc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAbN8wWVUYOB0Tct3K26KyCebqic65i_Rag&s" alt="" onClick={()=>{time("real madrid")}}/>
    <img className="imgpagincc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggw8WdS8vjmEvY_fQUXXAMF6WC5eDEsN7Bg&s" alt="" onClick={()=>{time("cruzeiro")}}/>
    <img className="imgpagincc" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvYniJpBgsQDegZa9R0w3AI3LeWid44rM4A&s" alt="" onClick={()=>{time("city")}}/>
    <img className="imgpagincc" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/640px-Botafogo_de_Futebol_e_Regatas_logo.svg.png" alt="" onClick={()=>{time("botafogo")}}/>
    <img className="imgpagincc" src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png" alt="" onClick={()=>{time("psg")}}/>
    </div>
    <section id="paginaPrincProd">

        {
           
            todosProdutos2.length < 1 ? 
            "NENHUM PRODUTO" : 
            todosProdutos2.map((a)=>{
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