import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './baseTeste';
import Login from './login';


export default () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
            </Routes>
    </BrowserRouter>
  );
};


