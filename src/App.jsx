import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Carrito from './components/content/Carrito';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Producto from './components/content/Producto';
import ItemDetailContainer from './components/content/ItemDetailContainer'
import Filter from './partials/Filter';
import ItemListContainer from './components/ItemListContainer';
import Categoria from './components/content/Categoria'

function App() {
  return (
      <>
        <BrowserRouter>
        <NavBar />
        <Filter />
          <Routes>
              <Route path="/Carrito" element={<Carrito/>} />
              <Route path="/" element={<ItemListContainer/>}  />
              <Route path="/producto/:id" element={<Producto/>}  />
              <Route path="/Categoria/:name_category" element={<Categoria/>}  />
              <Route path="/ItemDetailContainer" element={<ItemDetailContainer/>}  />
          </Routes>
        <Footer />
        </BrowserRouter>

              
          
    </>
  );
}

export default App;
