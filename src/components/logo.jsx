import React from 'react';
import images from '../assets/images/logo.png'
import { Link } from 'react-router-dom';


const logo = () => {
    return (
        <>
            <div className="logo-navBar">
                <Link to='/'>
                        <img src={images} alt="logo" />
                </Link>
            </div> 
        </>
    );
}

export default logo;
