import React, {useState} from 'react';
import {searchProducto} from '../utils/firebase'

const SearchNavBar = ({busqueda}) => {
    const [search, setSearch] = useState("");
    
    const buscar = async(e) => {
    e.preventDefault()
    searchProducto(search).then(producto =>{
        console.log(producto);
    })
    }
    
    return (
        <>
                <div className="header_searchBar" style={{borderRadius: '3rem'}}>
                    <form action="/search" method="GET"  onSubmit={buscar}>
                        <input type="text" name="search" style={{fontSize: '1rem', fontWeight: 'bold'}}  placeholder={busqueda} onChange={e=>{
                            setSearch(e.target.value)
                        }} />
                        <button type="submit">
                        <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
        </>
    );
}

export default SearchNavBar;
