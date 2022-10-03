import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footerDesign'>
            <div className='Contacto-footer'>
                <h3>CONTACTO</h3>
                <p>calle falsa 133</p>
                <p>C1435DSD | CABA</p>
            </div>
            <div className='Politicas-footer'>
                <h3>POLITICAS DE PRIVACIDAD</h3>
                <p> Todos los derechos reservados para fifa y goats</p>
            </div>
            <div className='Seguinos-footer'>
                <h3>SEGUINOS EN</h3>
            <li className='footerIcon'>
                <Link to='#'><FontAwesomeIcon icon={faCartShopping} /></Link>
                <Link to='#'><FontAwesomeIcon icon={faPersonBreastfeeding} /></Link>
            </li>
            <li className='footerIcon2'>
                <Link to='#'><FontAwesomeIcon icon={faPersonBreastfeeding} /></Link>
                <Link to='#'><FontAwesomeIcon icon={faPersonBreastfeeding} /></Link>
            </li>
            </div>
            
            
            


        </div>
    );
}

export default Footer;
