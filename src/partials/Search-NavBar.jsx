import React from 'react';

const SearchNavBar = ({busqueda}) => {
    return (
        <>
                <div className="flexsearch">
                    <div className="flexsearch--wrapper">
                        <form className="flexsearch--form" action="#" method="post">
                            <div className="flexsearch--input-wrapper">
                                <input className="flexsearch--input" type="search" placeholder={busqueda} />
                            </div>
                                <input className="flexsearch--submit" defaultValue="➜" />
                        </form>
                    </div>
                </div>
        </>
    );
}

export default SearchNavBar;
