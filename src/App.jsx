import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/content/Carrito";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Producto from "./components/content/Producto";
import ItemDetailContainer from "./components/content/ItemDetailContainer";
import Filter from "./partials/Filter";
import ItemListContainer from "./components/ItemListContainer";
import Categoria from "./components/content/Categoria";
import Contacto from "./components/content/Contacto";
import { DarkModeContext } from "../src/context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={!darkMode ? "light" : "dark"}>
      <BrowserRouter>
        <NavBar />
        <Filter />
        <Routes>
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/Categoria/:name_category" element={<Categoria />} />
          <Route
            path="/ItemDetailContainer"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
