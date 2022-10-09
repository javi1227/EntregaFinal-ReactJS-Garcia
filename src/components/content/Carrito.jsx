import React from 'react'
import prueba from '../../assets/images/Messi.png'

export default function Carrito() {
  return (
    <>
  <div className="contenidoEntero">
    <div className="encerrandoCarro">
        <div className="totalCarrito">
            <div className="cruzParaBorrar">
              <i className="xBorrar fa-solid fa-circle-xmark" />
            </div>
            <div className="eliminarBorrar">
              <span>eliminar</span>
            </div>
            <div className="productoEnCarrito">
                <div className="imagenTotalProducto">
                <img src={prueba} />
                </div>
                <div className="nombreDelProducto">
                          <h3>Lio Messi</h3>
                      <div className="numerosCarritos">
                          <span>$6.400,00</span> 
                      </div>
                </div>
          </div> 
        </div>

        <div className="totalCarrito">
            <div className="cruzParaBorrar">
              <i className="xBorrar fa-solid fa-circle-xmark" />
            </div>
            <div className="eliminarBorrar">
              <span>eliminar</span>
            </div>
            <div className="productoEnCarrito">
                <div className="imagenTotalProducto">
                <img src={prueba} />
                </div>
                <div className="nombreDelProducto">
                          <h3>Lio Messi</h3>
                      <div className="numerosCarritos">
                          <span>$6.400,00</span> 
                      </div>
                </div>
          </div> 
        </div>
        <div className="totalCarrito">
            <div className="cruzParaBorrar">
              <i className="xBorrar fa-solid fa-circle-xmark" />
            </div>
            <div className="eliminarBorrar">
              <span>eliminar</span>
            </div>
            <div className="productoEnCarrito">
                <div className="imagenTotalProducto">
                <img src={prueba} />
                </div>
                <div className="nombreDelProducto">
                          <h3>Lio Messi</h3>
                      <div className="numerosCarritos">
                          <span>$6.400,00</span> 
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
                      <input type="text" className="coupon-value" placeholder="Insertar Código" />
                      <button type="submit" className="btnAplicar" style={{background: 'black', color: 'white'}}>APLICAR</button>   
                  </div>      
              </div>
          </div>
          <div className="totalYsubtotal">
              <div className="subTotalCarrito">
                <span>Subtotal</span> <span>$6.400,00</span>
              </div>
              <div className="subTotalCarrito" style={{fontWeight: 800, fontSize: '1.3rem'}}>
                <span>Total</span> <span>$6.400,00</span>
              </div>
              <span><button className="submit-Compra" type="submit" style={{background: 'black', color: '#dc4c2c'}}>FINALIZAR COMPRA</button></span>
              <span><button className="submit-Compra" type="submit">CONTINUAR COMPRANDO</button></span>
          </div>
        </div>    
  </div>


    </>
  )
}
