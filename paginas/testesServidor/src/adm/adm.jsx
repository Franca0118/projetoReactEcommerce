import React, { useEffect } from "react";
import axios from 'axios';
import { redirect, useNavigate } from "react-router-dom";






export default  () => {


    const navegar = useNavigate()
    let teste = async () => {
        
        const token = localStorage.getItem('token')
        console.log(token)
        const ola = await axios.get(`http://localhost:3000/bd/teste`, {
            headers: {
                authorization: token
            }
        }).catch(()=>{
            navegar('/')
        })
        
        
        
            
            
        
    }

    useEffect(()=>{
        teste()
    },[])






    return (
        <div id="paginaadm">
            <form action="">
                <h1>CRIAR PRODUTO</h1>
                
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <button>ENVIAR</button>
            </form>

            <form action="">
                <h1>EDITAR PRODUTO</h1>
                
                <input type="text" placeholder="ID PRODUTO" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <input type="text" placeholder="nome" />
                <button>ENVIAR</button>
            </form>

            <form action="">
                <h1>DELETAR PRODUTO</h1>
                <input type="text" placeholder="ID PRODUTO" />
                <button>ENVIAR</button>
            </form>

            <form action="">
                <h1>DELETAR USUARIO</h1>
                <input type="text" placeholder="ID USER" />
                <button>ENVIAR</button>
            </form>


        </div>
    )
}