import React, { useState, useEffect, useContext } from "react";
import { getProductos } from "../utils/firebase";
import { Link } from "react-router-dom";
import "../assets/css/Cards.css";
import { CarritoContext } from "../context/CarritoContext";
import Home from "./content/Home";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { agregarProducto } = useContext(CarritoContext);

  useEffect(() => {
    getProductos().then((productos) => {
      const cardProducto = productos.filter(producto => producto.Category_id !== 5).map((producto) => (
        <div className="contenedorItem" key={producto}>
          <div className="cardsContainer">
            <div className="card">
              <img src={producto.img} alt="logo" className="card-image" />
              <div className="card-contenido">
                <p className="price">$ {producto.price}</p>
                {/* <span className="favorite">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={24}
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                  </svg>
                </span> */}
              </div>
              <div className="card-btn-carrito">
                <button className="btn5">
                  <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
                </button>
                <Link to="#">
                  <button
                    className="Button-Carrito"
                    onClick={() => {
                      agregarProducto(producto, 1);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ));

      setProductos(cardProducto);
    });
  }, []);

  return<>
    <div className="productosConteiner">
            {productos}
    </div>
    <Home />
  </>

  
};

export default ItemListContainer;
