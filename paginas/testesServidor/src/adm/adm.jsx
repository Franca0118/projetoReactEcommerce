import React, { useEffect, useState } from "react";
import axios from 'axios';
import { redirect, useNavigate } from "react-router-dom";






export default  () => {


    const alert = (a, b) => {
        if (b)
        {
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
                title: `${a}`
              });
        } else {
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
                icon: "error",
                title: `${a}`
              });
        }
    }
    const [criarProdutos, setcriarProdutos] = useState({})
    const [EditarProdutos, setEditarProdutos] = useState({})
    const [ProdutoDelID, setProdutoDelID] = useState({})
    const [UserDelID, setUserDelID] = useState({})

    
    

    const navegar = useNavigate()
    let teste = async () => {
        
        const token = localStorage.getItem('token')
        const ola = await axios.get(`http://localhost:3000/usuario/verify`, {
            headers: {
                authorization: token
            }
        }).catch(()=>{
            localStorage.clear()
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
                await axios.post(`http://localhost:3000/produto/criarNovo`, 
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
                ).then((a)=>{
                    alert(a.data.msg, true)
                })
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
            

            {/* EDITAR */}
            <form onSubmit={async()=>{
                event.preventDefault()
                const token = localStorage.getItem('token')
                await axios.post(`http://localhost:3000/produto/editar/${EditarProdutos.id}`, 
                    {
                        nome: EditarProdutos.nome,
                        descricao: EditarProdutos.descricao,
                        time: EditarProdutos.time,
                        preco: EditarProdutos.preco,
                        urlImg: EditarProdutos.urlimg,
                        estoque: EditarProdutos.estoque
                    },
                    {
                    headers: {
                        authorization: token
                    }
                    }
                ).then((a)=>{
                    alert(a.data.msg, true)
                }).catch((a)=>{
                    alert(a.data.msg, false)
                })
                
            }}>
                <h1>EDITAR PRODUTO</h1>
                <input type="text" placeholder="ID PRODUTO" required onInput={(e)=>{
                    if (parseFloat(e.target.value))
                    {
                        EditarProdutos.id = parseFloat(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <input type="text" placeholder="nome do produto" required onInput={(e)=>{
                    EditarProdutos.nome = e.target.value
                }} />
                <input type="text" placeholder="descricao do produto" required onInput={(e)=>{
                    EditarProdutos.descricao = e.target.value
                }}/>
                <input type="text" placeholder="time" required onInput={(e)=>{
                    EditarProdutos.time = e.target.value
                }}/>
                <input type="text" placeholder="preco" required onInput={(e)=>{
                    if (parseFloat(e.target.value))
                    {
                        EditarProdutos.preco = parseFloat(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <input type="text" placeholder="urlImg" required onInput={(e)=>{
                    EditarProdutos.urlimg = e.target.value
                }}/>
                <input type="number" placeholder="qnt em estoque" required onInput={(e)=>{
                    if (parseInt(e.target.value))
                    {
                        EditarProdutos.estoque = parseInt(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <button>ENVIAR</button>
            </form>

            <form onSubmit={async()=>{
                event.preventDefault()
                const token = localStorage.getItem('token')
                await axios.get(`http://localhost:3000/produto/deletarprodutos/${ProdutoDelID.id}`, {
                    headers: {
                        authorization: token
                    }
                    }
                ).then((a)=>{
                    alert(a.data.msg, true)
                }).catch((a)=>{
                    alert(a.data.msg, false)
                })
                
            }}>
                <h1>DELETAR PRODUTO</h1>
                <input type="text" placeholder="ID PRODUTO" required onInput={(e)=>{
                    if (parseInt(e.target.value))
                    {
                        ProdutoDelID.id = parseInt(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <button>ENVIAR</button>
            </form>

            <form onSubmit={async()=>{
                event.preventDefault()
                const token = localStorage.getItem('token')
                await axios.get(`http://localhost:3000/usuario/deletarUser/${UserDelID.id}`, {
                    headers: {
                        authorization: token
                    }
                    }
                ).then((a)=>{
                    alert(a.data.msg, true)
                }).catch((a)=>{
                    alert(a.data.msg, false)
                })
                
            }}>
                <h1>DELETAR USUARIO</h1>
                <input type="text" placeholder="ID USER" required onInput={(e)=>{
                    if (parseInt(e.target.value))
                    {
                        UserDelID.id = parseInt(e.target.value)
                    } else {
                        e.target.value = ""
                    }
                }}/>
                <button>ENVIAR</button>
            </form>
        </div>
    )
}