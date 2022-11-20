import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import codes from "../../partials/Codes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carrito = () => {
  const [codigo, setCodigo] = useState("");
  const [discount, setDiscount] = useState(codes);
  const { carrito, quitarProducto, clearCart } =
  useContext(CarritoContext);
  const [total, setTotal] = useState(carrito.reduce((total, producto) => total + producto.cantidad * producto.price,0));


    const DiscountNot =() =>{
      toast.error('CÓDIGO INVALIDO', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    const DiscountGod =() =>{
      toast.success('DESCUENTO AGREGADO!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });  
    }

      const applyDiscount = ()=>{
        if (
          discount.includes(codigo)
        ) {
          setTotal(total-(total*0.5))
          setDiscount(discount.filter(value=>value !== codigo))
          DiscountGod()
        } else {
          DiscountNot()
        }
      }
      
      
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
            <button className="BorrarCarrito" onClick={()=>clearCart()}>Borrar Carrito <i className="bi bi-trash-fill"></i></button>
          </div>
          <div className="separadorMax">
            <div className="codigoDescuento">
              <h4>¿Tenes un código de descuento?</h4>
              <div className="cuponDescuento">
                <div className="barraDeDescuento">
                  <input type="text" Name="coupon-value" onChange={(event)=>setCodigo(event.target.value)} placeholder="Insertar Código"/>
                  <button type="submit" className="btnAplicar" onClick={applyDiscount}>
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
                  <button className="submit-Compra" type="submit" style={{ background: "black", color: "#dc4c2c" }}>
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
  <ToastContainer />
    </div>
  );
};

export default Carrito;
