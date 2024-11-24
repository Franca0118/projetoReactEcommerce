import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";
import { CiShoppingCart, CiUser } from "react-icons/ci";




export default () => {
    let [idprod, setid] = useState()
    const [produto, setProdutos] = useState({})
    const nagevar = useNavigate()
    const [userID, setUserID] = useState({})

    
    let pegarUm = async (id) => {
        await axios.get("http://localhost:3000/produto/getOne/" + id).then((a) => {
            setProdutos(a.data.produto)
            return a.data.produto
        })
    }

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
            setUserID(user2.id)
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
    useEffect(() => {
        let id = new URLSearchParams(window.location.search)
        id = id.get("idprod")
        if (!parseInt(id)) {
            nagevar('/')
        } else {
            pegarUm(id)
        }

        verToken()

    }, [])


    return (
        <div id="exibisaoProduto">
            <header>
                <div className="logo"><a href="/"><img src="logo.png" /></a></div>
                <nav>
                    <a href="#">menu</a>
                    <a href="#">menu</a>
                    <a href="#">menu</a>
                    <a href="/adm">adm</a>
                </nav>
                <div className="search">
                    <input type="text" placeholder="Buscar produtos..." />
                </div>
                <div className="icons">
                    {logado}
                    <CiShoppingCart className="icon2" />
                </div>
            </header>
            <div className="divprod">
                <span>
                    <img src={produto.urlImg} alt="" />
                </span>
                <span>
                    <h1>{produto.nome}</h1>
                    <p>{produto.descricao}</p>
                    <h2>R${produto.preco}</h2>
                    <button onClick={async()=>{
                        const token = await localStorage.getItem('token');
                        
                        await axios.post(`http://localhost:3000/carrinho/criarNovo`, 
                            {
                                produtoID:produto.id,
                                clienteID:userID
                            },
                            {
                            headers: {
                                authorization: token
                            }
                            }
                        ).then(()=>{
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
                                title: `Adicionado ao carrinho`
                              });
                        })



                    }}>COMPRAR</button>
                </span>
                
            </div>
        </div>
    )
}