import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ roles }) => {
    // resgata o tokon anteriomente armazenado localmente
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).cargo : null;

  if (!token) {
    return <Navigate to="/login" />;
  }

  
  if (roles && roles.length > 0 && ![... roles ].includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
