import React, {useContext}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../context/darkModeContext';
import { CarritoContext } from '../context/CarritoContext';
import { Link } from 'react-router-dom';
import '../App.css'
const CartWidget = () => {
    const {productosTotales} =useContext(CarritoContext);
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (
        <>
            <li className="main1">
                <Link to="/"><FontAwesomeIcon className='main4' icon={faHouse} /></Link>
                <figcaption>Home</figcaption>
            </li>
            <li className="main3">
                <Link to="/Carrito"><FontAwesomeIcon className='main4'icon={faCartShopping} /></Link>
            <p className='contadorCart'>{productosTotales()}</p>
                <figcaption>Carrito</figcaption>
            </li>

            <button className={!darkMode ? "ligthMode" : "darkMode2"} onClick={() => toggleDarkMode()}>
                {!darkMode ? (
                <span className="ligthSpan"> 
                    <span className="ligthCircle" /> <i className="sun2 bi bi-sun-fill"></i>
                </span> ) :(
                <span className="darkSpan">
                    <span className="darkCircle" /> <i className="moon2 bi bi-moon-fill"></i>
                </span>
                )}
            </button>
            {darkMode}
        </>
    );
}

export default CartWidget;
