import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
    </div>
    );
};

export default App;
