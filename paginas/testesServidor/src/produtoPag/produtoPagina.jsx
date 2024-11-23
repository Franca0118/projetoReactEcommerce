import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default () => {
    let [idprod, setid] = useState()
    const [produto, setProdutos] = useState({})
    const nagevar = useNavigate()


    let pegarUm = async (id) => {
        await axios.get("http://localhost:3000/produto/getOne/"+id).then((a)=>{
            setProdutos(a.data.produto)
            return a.data.produto
        })
    }
    

    useEffect(()=>{
        let id = new URLSearchParams(window.location.search)
        id = id.get("idprod") 
        if (!parseInt(id))
        {
            nagevar('/')
        } else {
            pegarUm(id)
        }

    },[])


    return (
        <div>
            <h1>{produto.nome}</h1>
            <img src={produto.urlImg} alt="" />
        </div>
    )
}