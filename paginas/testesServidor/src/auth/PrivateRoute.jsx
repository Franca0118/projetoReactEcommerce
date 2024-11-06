import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ roles }) => {
    // resgata o tokon anteriomente armazenado localmente
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  if (!token) {
    return <Navigate to="/login" />;
  }

  console.log(roles && roles.length > 0 && ![... roles ].includes(userRole))
  if (roles && roles.length > 0 && ![... roles ].includes(userRole)) {
    return <Navigate to="/" />;
  }


};

export default PrivateRoute;