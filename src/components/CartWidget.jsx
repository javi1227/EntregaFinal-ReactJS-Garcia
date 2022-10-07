import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const CartWidget = () => {
    return (
        <>
            <li className="main1">
                <Link to="/"><FontAwesomeIcon icon={faHouse} /></Link>
                <figcaption>Home</figcaption>
            </li>
            <li className="main2">
                <Link to="#"><FontAwesomeIcon icon={faStore} /></Link>
                <figcaption>Tienda</figcaption>
            </li>
            <li className="main3">
                <Link to="#"><FontAwesomeIcon icon={faCartShopping} /></Link>
                <figcaption>Carrito</figcaption>
            </li>
        </>
    );
}

export default CartWidget;
