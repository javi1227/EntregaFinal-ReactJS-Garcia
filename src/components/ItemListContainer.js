import React from 'react';
import images from '../assets/images/logo.png'
const ItemListContainer = ({greeting}) => {
    return (
        
        <div className='contenedorItem'>
            
                <a href="#">
                    <div  className='imagesItem'>
                        <img src={images} alt="logo"/>
                    </div>
                    <div className='contenedorData'>
                        <h4>{greeting}</h4>
                        <div className='priceAndBuy'>
                            <h4>$50</h4> <h4>buy</h4>                   
                        </div>
                    </div>
                </a>
        </div>
    );
}

export default ItemListContainer;
