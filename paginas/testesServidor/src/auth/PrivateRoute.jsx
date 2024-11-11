import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ roles }) => {
    // resgata o tokon anteriomente armazenado localmente
  const token = localStorage.getItem('token');
  console.log(token)
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).cargo : null;
  
  // function atob(data: string): string (+1 overload)
  // Decodes a string of Base64-encoded data into bytes, 
  // and encodes those bytes into a string using Latin-1 (ISO-8859-1).

  // The data may be any JavaScript-value that can be coerced into a string.

  // This function is only provided for compatibility with legacy web platform 
  // APIs and should never be used in new code, because they use strings to represent 
  // binary data and predate the introduction of typed arrays in JavaScript. For code 
  // running using Node.js APIs, converting between base64-encoded strings and binary 
  // data should be performed using Buffer.from(str, 'base64') and buf.toString('base64').

  // codigo do servidor responsavel por gerar o token armazenado no login o usuario
  // const token = jwt.sign({ id: usuarioAchado.id, cargo: usuarioAchado.cargo }, 'secreto', { expiresIn: '1h' });
  // res.json({ token, cargo: usuarioAchado.role });

 //  console.log(token)
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."eyJpZCI6MSwiY2FyZ28iOiJjbGllbnRlIiwiaWF0IjoxNzMxMzUzODYxLCJleHAiOjE3MzEzNTc0NjF9".DEN-Oi-40o5Ig4EV0KXvHq7dZS-wAOUTXKovM3ZFQAI
  // console.log(token.split('.')[1])
  //eyJpZCI6MSwiY2FyZ28iOiJjbGllbnRlIiwiaWF0IjoxNzMxMzUzODYxLCJleHAiOjE3MzEzNTc0NjF9


  


  if (!token || !userRole) {
    return <Navigate to="/" />;
  }

  
  if (roles && roles.length > 0 && ![... roles ].includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
  // renderiza a rota filha
};

export default PrivateRoute;
