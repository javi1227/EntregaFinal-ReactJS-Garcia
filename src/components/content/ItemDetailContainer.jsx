import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import images from '../../assets/images/Messi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../.././assets/css/Detalle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Detalle ({producto}) {
    const [cantidad, setCantidad] = useState(1);
    
    const {agregarProducto, quitarProducto} = useContext(CarritoContext)
    const cantProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < producto.stock) {
                setCantidad(cantidad +1)
            }
        } else {
            if(cantidad >1){
                setCantidad(cantidad -1)
            }
        }
    }
    const mensaje =() =>{
        toast.success('PRODUCTO AGREGADO!', {
            osition: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
return (
    <div className='totalDetail'>
    <div className="Detalle-total" >
        <div className="imgContenedora">
            <img src={producto.img} alt="logo"/>
        </div>
        <div className="descripcionContenedora">
            <div className="textoContenedor">
                <p>{producto.descripcion}</p>
            </div>
            <div className="Totales">
                <div className="contador">
                    <button className='btn btn-dark' onClick={()=> cantProducto("-")}>-</button>
                        <p className='p-Productos'>{cantidad}</p>
                    <button className='btn btn-dark' onClick={()=> cantProducto("+")}>+</button>
                </div>
                <div className="PriceTotal" style={{color: "black"}} >
                    <p>${producto.price}</p>
                </div>
                <> 
                    <button 
                            className="BuyTotal"  
                            onClick={()=>{ 
                                    agregarProducto(producto,cantidad)
                                    mensaje()
                            }}>
                        <p><FontAwesomeIcon icon={faCartShopping} /></p>
                    </button>
                </>
            
            </div>
        </div>

    </div>
    <div className="Similares">
                <h2>PRODUCTOS SIMILARES</h2>
                <div className="contenedorSimilares">
                    <div className="ContenedorImg1">
                        <img src={images} alt="logo"/>
                    </div>
                    <div className="ContenedorImg2">
                        <img src={images} alt="logo"/>
                    </div>
                    <div className="ContenedorImg3">
                        <img src={images} alt="logo"/>
                    </div>

                </div>
            </div>
            <ToastContainer />
</div>
)
}
