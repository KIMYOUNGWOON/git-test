import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import App from './App';
import Main from './pages/Main/Main';
=======
import Login from './pages/Login/Login';
>>>>>>> main

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Main />} />
=======
        <Route path="/" element={<Login />} />
>>>>>>> main
      </Routes>
    </BrowserRouter>
  );
}
