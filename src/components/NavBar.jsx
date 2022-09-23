import React from 'react'
import '../App.css'
import Icon from '../components/logo'
import SearchNavBar from '../partials/Search-NavBar.jsx'
import CartWidget from "./CartWidget"
const NavBar = () => {
    return (
        <div className="mayorHeader">
            <>
                    <Icon />
                <div className="barra">
                    <SearchNavBar busqueda="Buscar Producto"/>
                </div>
            </>
                <ul className="options-NavBar">  
                <CartWidget />
                </ul>
        </div>
    )
}
export default NavBar;
