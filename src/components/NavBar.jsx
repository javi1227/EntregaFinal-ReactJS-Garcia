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
                <>
                    <SearchNavBar busqueda="Buscar Producto"/>
                </>
            </>
                <ul className="options-NavBar">  
                <CartWidget />
                </ul>
        </div>
    )
}
export default NavBar;
