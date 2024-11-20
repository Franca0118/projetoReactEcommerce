import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [user, setUser] = useState([])

    let [ email, setemail] = useState("")
    let [ usuario, setusuario] = useState("")
    let [ urlImg, seturlImg] = useState("")
    const navegar = useNavigate()

    useEffect(()=>{
        try {
            const token = localStorage.getItem('token');
            setUser(token ? JSON.parse(atob(token.split('.')[1])) : null)
            setemail(user.email)
            setusuario(user.usuario)
            seturlImg(user.img)
        } catch
        {
            navegar('/')
        }
    }, [])
  

    const mudarUser = async () => {
        const newUser = await axios.post(`http://localhost:3000/bd/alterar/`+user.id, {
            usuario,
            email,
            urlImg
        })
        if (newUser.status == 200)
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
                title: "Dados alterados"
              });
              localStorage.clear()
              navegar('/')
        }
    }
   

    return (
        <div className="form-container">
        <h2>Alterar Perfil</h2>
        <section>
                <img src={`${user.img}`} alt="URL ARMAZENADA COM ERRO"/>
            </section>

        <form onSubmit={()=>{
            event.preventDefault()
            mudarUser()
            
        }}>
            
            <div className="input-group">
                <label htmlFor="username">Usuário</label>
                <input type="text" defaultValue={user.nome} id="username" name="username" placeholder="Novo nome de usuário" required onInput={(e)=>{
                        setusuario(e.target.value)
                    }}/>
            </div>
            <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" defaultValue={user.email} id="email" name="email" placeholder="Novo e-mail" required onInput={(e)=>{
                        setemail(e.target.value)
                    }}/>
            </div>
            <div className="input-group">
                <label htmlFor="urlimg">URL imagem</label>
                <input type="text" id="urlimg" defaultValue={user.img} name="urlimg" placeholder="Nova URL IMG" required onInput={(e)=>{
                        seturlImg(e.target.value)
                    }}/>
            </div>
            <div className="form-footer">
                <button type="submit" className="btn-submit">Salvar alterações</button>
            </div>
        </form>
    </div>
    )
}