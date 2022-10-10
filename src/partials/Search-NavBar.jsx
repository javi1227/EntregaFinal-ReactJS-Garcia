import React from 'react';

const SearchNavBar = ({busqueda}) => {
    return (
        <>
                <div className="header_searchBar" style={{borderRadius: '3rem'}}>
                    <form action="/search" method="GET">
                        <input type="text" name="search" style={{fontSize: '1rem', fontWeight: 'bold'}}  placeholder={busqueda}/>
                        <button type="submit">
                        <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
        </>
    );
}

export default SearchNavBar;
