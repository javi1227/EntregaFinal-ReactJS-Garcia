import React from 'react';
import images from '../../assets/images/Messi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../.././assets/css/Detalle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Detalle () {


    const mensaje =() =>{
        toast.success('COMPRA EXITOSA!', {
            osition: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }


  return (
    <>
    <div className="Detalle-total">
        <div className="imgContenedora">
            <img src={images} alt="logo"/>
        </div>
        <div className="descripcionContenedora">
            <div className="textoContenedor">
                <p>Lionel Andrés Messi, más conocido como Leo Messi, es un futbolista argentino.
                    Juega como delantero en el PSG de la Primera División de Francia y 
                    en la Selección de fútbol de Argentina, de la cual es también capitán.
                </p>
            </div>
            <div className="Totales">
                <div className="PriceTotal">
                    <p>$45</p>
                </div>
                <> 
                    <button onClick={mensaje} className="BuyTotal">
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
</>
  )
}
