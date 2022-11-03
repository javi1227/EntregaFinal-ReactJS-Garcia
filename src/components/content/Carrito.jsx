import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const Carrito = () => {
  const { carrito, quitarProducto, setCarrito } =
    useContext(CarritoContext);

    useEffect(() => {

    }, []);

  const total = carrito.reduce(
    (total, producto) => total + producto.cantidad * producto.price,
    0
  );
  return (
    <div className="container">
      {carrito.length !== 0 ? (
        <>
          <div className="contenidoEntero">
          <h1 className="tituloInfoCarrito">Figuritas a comprar</h1>
            {carrito.map((producto) => (
              <div className="encerrandoCarro">
                <div className="totalCarrito">
                  <div className="eliminarBorrar">
                  <span className="material-symbols-outlined btnEditCarrito"  
                  onClick={() => 
                  quitarProducto(producto)}>
                        delete
                  </span>
                  </div>
                  <div className="productoEnCarrito">
                    <div className="imagenTotalProducto">
                      <img src={producto.img} alt="logo" />
                    </div>
                    <div className="nombreDelProducto">
                      <h3>{producto.nombre}</h3>
                      <div className="numerosCarritos">
                        <span>Cantidad: {producto.cantidad}</span>
                        <span>Precio: ${producto.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="separadorMax">
            <div className="codigoDescuento">
              <h4>¿Tenes un código de descuento?</h4>
              <div className="cuponDescuento">
                <div className="barraDeDescuento">
                  <input type="text" Name="coupon-value" placeholder="Insertar Código"/>
                  <button type="submit" className="btnAplicar">
                    APLICAR
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="totalYsubtotal">
                <div
                  className="subTotalCarrito"
                  style={{
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    margin: "2px 4px",
                  }}
                >
                  <span>Precio Total :</span>
                  <span>${total}</span>
                </div>
                <span>
                  <button
                    className="submit-Compra"
                    type="submit"
                    style={{ background: "black", color: "#dc4c2c" }}
                  >
                    FINALIZAR COMPRA
                  </button>
                </span>
                <span>
                  <button className="submit-Compra" type="submit">
                    <Link to="/" style={{ color: "white" }}>
                      CONTINUAR COMPRANDO
                    </Link>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="contCarritoVacio">
          <span className="material-symbols-outlined iconG" >
              production_quantity_limits
          </span>
          <h1> No existen elementos en el carrito </h1>
        <button className="btnHome">
          <Link to="/" style={{ color: "white" }}>
            Ir al Home
          </Link>
        </button>
          
        </div>
        </>
      )}
    </div>
  );
};

export default Carrito;
