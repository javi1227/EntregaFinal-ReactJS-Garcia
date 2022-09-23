import React from 'react';
import images from '../assets/images/logo.png'


const logo = () => {
    return (
        <>
            <div className="logo-navBar">
                    <img src={images} alt="logo" />
            </div> 
        </>
    );
}

export default logo;
