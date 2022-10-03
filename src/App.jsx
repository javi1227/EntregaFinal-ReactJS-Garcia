import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './components/content/Carrito';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Producto from './components/content/Producto';
import Detalle from './components/content/Detalle'
import Home from './components/content/Home';

function App() {
  return (
      <>
        <BrowserRouter>
        <NavBar />
          <Routes>
              <Route path="/Carrito" element={<Carrito/>} />
              <Route path="/" element={<h1>Hola</h1>}  />
              <Route path="/producto/:id" element={<Producto/>}  />
              <Route path="/Home" element={<Home/>}  />
              <Route path="/Detalle" element={<Detalle/>}  />
          </Routes>
        <Footer />
        </BrowserRouter>

              
          
    </>
  );
}

export default App;
