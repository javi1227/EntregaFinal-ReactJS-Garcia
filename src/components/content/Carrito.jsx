import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";

const Carrito = () => {
  const { carrito, agregarProducto, quitarProducto } =
    useContext(CarritoContext);

  const total = carrito.reduce(
    (total, producto) => total + producto.stock * producto.price,
    0
  );

  return (
    <div className="container">
      {carrito.length !== 0 ? (
        <>
          <div className="contenidoEntero">
            {carrito.map((producto) => (
              <div className="encerrandoCarro">
                <div className="totalCarrito">
                  <div className="eliminarBorrar">
                    <button
                      className="btn5"
                      onClick={() => quitarProducto(producto)}
                    >
                      Eliminar
                    </button>
                  </div>
                  <div className="productoEnCarrito">
                    <div className="imagenTotalProducto">
                      <img src={producto.img} alt="logo" />
                    </div>
                    <div className="nombreDelProducto">
                      <h3>{producto.nombre}</h3>
                      <div className="numerosCarritos">
                        <span>Cantidad: {producto.stock[0]}</span>
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
                  <input
                    type="text"
                    Name="coupon-value"
                    placeholder="Insertar Código"
                  />
                  <button
                    type="submit"
                    className="btnAplicar"
                    style={{ background: "black", color: "white" }}
                  >
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
                  <span>$ {total}</span>
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
          <h1>
            No existen elementos en el carrito
            <button className="btn btn-dark">
              <Link to="/" style={{ color: "white" }}>
                Ir al Home
              </Link>
            </button>
          </h1>
        </>
      )}
    </div>
  );
};

export default Carrito;
