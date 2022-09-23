import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    return (
        <>
            <li className="main1">
                <a href="#"><FontAwesomeIcon icon={faHouse} /></a>
                <figcaption>Home</figcaption>
            </li>
            <li className="main2">
                <a href="#"><FontAwesomeIcon icon={faStore} /></a>
                <figcaption>Tienda</figcaption>
            </li>
            <li className="main3">
                <a href="#"><FontAwesomeIcon icon={faCartShopping} /></a>
                <figcaption>Carrito</figcaption>
            </li>
        </>
    );
}

export default CartWidget;
