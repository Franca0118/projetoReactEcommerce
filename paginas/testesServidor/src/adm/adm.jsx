import React, { useEffect, useState } from "react";
import axios from 'axios';
import { redirect, useNavigate } from "react-router-dom";






export default  () => {


    const [criarProdutos, setcriarProdutos] = useState(
        {
            nome: "",
            descricao: "",
            time: "",
            preco: 0,
            urlimg: "",
            estoque: 0
        }
    )

    
    

    const navegar = useNavigate()
    let teste = async () => {
        
        const token = localStorage.getItem('token')
        const ola = await axios.get(`http://localhost:3000/usuario/teste`, {
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
            <form  onSubmit={async()=>{
                event.preventDefault()
                const token = localStorage.getItem('token')
                console.log(token)
                let ola = await axios.post(`http://localhost:3000/produto/criarNovo`, 
                    {
                        nome: criarProdutos.nome,
                        descricao: criarProdutos.descricao,
                        time: criarProdutos.time,
                        preco: criarProdutos.preco,
                        urlImg: criarProdutos.urlimg,
                        estoque: criarProdutos.estoque
                    },
                    {
                    headers: {
                        authorization: token
                    }
                    }
                )
                console.log(ola)

                // CHAT
                // você está passando o headers como se 
                // fosse parte do corpo da requisição (body) 
                // no axios.post. No entanto, o cabeçalho HTTP 
                // deve ser configurado como um parâmetro separado. 
                // Vamos corrigir isso!
                // let ola = await axios.post(http://localhost:3000/produto/criarNovo, {
                //     headers: {
                //         authorization: token
                //     },
                //     nome: criarProdutos.nome,
                //     descricao: criarProdutos.descricao,
                //     time: criarProdutos.time,
                //     preco: criarProdutos.preco,
                //     urlImg: criarProdutos.urlimg,
                //     estoque: criarProdutos.estoque
                   
                // })


            }}>
                <h1>CRIAR PRODUTO</h1>
                
                <input type="text" placeholder="nome do produto" required onInput={(e)=>{
                    criarProdutos.nome = e.target.value
                }} />
                <input type="text" placeholder="descricao do produto" required onInput={(e)=>{
                    criarProdutos.descricao = e.target.value
                }}/>
                <input type="text" placeholder="time" required onInput={(e)=>{
                    criarProdutos.time = e.target.value
                }}/>
                <input type="text" placeholder="preco" required onInput={(e)=>{
                    if (parseFloat(e.target.value))
                    {
                        criarProdutos.preco = parseFloat(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <input type="text" placeholder="urlImg" required onInput={(e)=>{
                    criarProdutos.urlimg = e.target.value
                }}/>
                <input type="number" placeholder="qnt em estoque" required onInput={(e)=>{
                    if (parseInt(e.target.value))
                    {
                        criarProdutos.estoque = parseInt(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <button>ENVIAR</button>
            </form>
            


            <form onSubmit={()=>{
                event.preventDefault()
            }}>
                <h1>EDITAR PRODUTO</h1>
                
                <input type="text" placeholder="ID PRODUTO" />
                <input type="text" placeholder="nome do produto" />
                <input type="text" placeholder="descricao do produto" />
                <input type="text" placeholder="time" />
                <input type="text" placeholder="preco" />
                <input type="text" placeholder="urlImg" />
                <input type="text" placeholder="qnt em estoque"/>
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