import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Login from './loginregistro/login';
import Perfil from './Perfil/perfil'
import Registrar from './loginregistro/regristro';


export default () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} ></Route>
                <Route path="/registro" element={<Registrar />} ></Route>

                {// aqui é entregado os cargos que queremos permitir entrar nas rotas
                // e dentro da funcao em auth, testamos se o token armazenado localmente 
                // possui a permissao necessaria para acessar a rota 
                }
                <Route element={<PrivateRoute roles={['cliente', 'adm']} />}>
                    <Route path="/perfil" element={<Perfil />} />
                </Route> 
                {/* <Route path="/editar" element={<EditarConta />} ></Route> */}
            </Routes>
    </BrowserRouter>
  );
};


