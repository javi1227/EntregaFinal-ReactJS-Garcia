import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
      <>
        <NavBar />
        <ItemListContainer  greeting="Producto 1"/>
      </>
  );
}

export default App;
