import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";
import { CiShoppingCart, CiUser } from "react-icons/ci";




export default () => {

    const nagevar = useNavigate()
    let [produtosIDS, setprodutosIDS] = useState([])
    let [produtos, setprodutos] = useState([])
    let [userID, serUserID] = useState(0)
    let [totalpo, settotalpo] = useState(0)


    let [logado, setLogado] = useState(
        () => {
            return (<span onClick={() => {
                nagevar('/login')
            }}>
                <LuLogIn className="icon2" />
                <h1>Faça seu login</h1>
            </span>
            )
        }
    )
    let pegarProdutosIDS = async (idsProdutos) => {
        let prods = []
        let soma = 0
        for (let i = 0; i < idsProdutos.length; i++) {
            await axios.get("http://localhost:3000/produto/getOne/" + idsProdutos[i].produtoID).then((a) => {
                prods.push(a.data.produto)
                soma += parseFloat(a.data.produto.preco)
            })
            
        }
        settotalpo(soma)
        setprodutos(prods)


    }
    console.log(produtos)



    let pegarProdutos = async (id, token) => {
        await axios.get(`http://localhost:3000/carrinho/carrinhoByID/${id}`,
            {
                headers: {
                    authorization: token
                }
            }
        ).then((a) => {
            setprodutosIDS(a.data.a)
            pegarProdutosIDS(a.data.a)
        })
    }


    let verToken = async () => {

        const token = localStorage.getItem('token');
        const user2 = token ? JSON.parse(atob(token.split('.')[1])) : false
        if (user2) {
            serUserID(user2.id)
            pegarProdutos(user2.id, token)
            setLogado(() => {
                return (
                    <span onClick={() => {
                        nagevar('/perfil')
                    }}>
                        <CiUser className="icon2" /> <h1>Bem vindo(a) {user2.nome}</h1>
                    </span>
                )
            })
        }
    }


    useEffect(() => {

        verToken()

    }, [])


    return (
        <div id="carrinho">
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
            <div id="carrinhodiv">
                {
                    produtos.length < 1 ? "NENHUM PRODUTO" :
                        produtos.map((a) => {

                            return <section key={a.id}>
                                <img src={a.urlImg} alt="" />
                                <nav>
                                    <h1>{a.nome}</h1>
                                    <h2>R${a.preco}</h2>
                                </nav>
                            </section>
                        })
                }
            </div>

            <button onClick={async () => {
                const token = localStorage.getItem('token');
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
                    title: "Compra realizada com sucesso"
                  });
                await axios.delete(`http://localhost:3000/carrinho/carrinhoByID/${userID}`,
                    {
                        headers: {
                            authorization: token
                        }
                    }
                )

                  nagevar("/")
            }}>COMPRAR</button>
            <h2>R${totalpo}</h2>
        </div>
    )
}