import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const Carrito = () => {
  const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
  const [carritoLocal, setCarritoLocal] = useState([]);
  useEffect(() => {
    const prodMostrar = carrito.map(producto =>
      <div className="contenidoEntero">
          <div className="encerrandoCarro">
              <div className="totalCarrito">
                  <div className="eliminarBorrar">
                      <button className='btn5'onClick={() => quitarProducto(producto)}>Eliminar</button>
                  </div>
                  <div className="productoEnCarrito">
                      <div className="imagenTotalProducto">
                          <img src={producto.img} alt="logo" />
                      </div>
                      <div className="nombreDelProducto">
                              <h3>{producto.nombre}</h3>
                          <div className="numerosCarritos">
                              <span>Cantidad: {producto.stock}</span>
                              <span>Precio: ${producto.price}</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="separadorMax">
                <div className="codigoDescuento">
                    <h4>¿Tenes un código de descuento?</h4>
                    <div className="cuponDescuento">
                      <div className="barraDeDescuento">
                        <input type="text" Name="coupon-value" placeholder="Insertar Código"/>
                        <button type="submit" className="btnAplicar" style={{ background: "black", color: "white" }}>
                            APLICAR
                        </button>
                      </div>
                    </div>
                </div>
                <div className="totalYsubtotal">
                    {/* <div className="subTotalCarrito">
                      <span>Subtotal</span> <span>$6.400,00</span>
                    </div> */}
                    <div className="subTotalCarrito" style={{ fontWeight: 800, fontSize: "1.3rem", margin: "2px 4px" }}>
                      <span>Precio Total :</span> <span>$ {producto.price * producto.stock}</span>
                    </div>
                    <span>
                      <button className="submit-Compra" type="submit" style={{ background: "black", color: "#dc4c2c" }}>
                        FINALIZAR COMPRA
                      </button>
                    </span>
                    <span>
                      <button className="submit-Compra" type="submit">
                      <Link to="/" style={{color:"white"}}>CONTINUAR COMPRANDO</Link>
                      </button>
                    </span>
                </div>
          </div>
      </div>
    )
      setCarritoLocal(prodMostrar)
  }, [carrito]);
  
  const app = (carrito.length != 0) ? <div className='row'>{carritoLocal}</div> : <><h1>No existen elementos en el carrito  <button className='btn btn-dark'><Link to="/" style={{color:"white"}}> Ir al Home</Link></button></h1></>
    return app
}

export default Carrito;

      