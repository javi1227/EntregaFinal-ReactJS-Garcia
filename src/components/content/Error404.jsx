import React from 'react';

const Error404 = () => {
    return (

        <div className="Body404">
            <div className="contenedor_del_404">
                    <p className="P_de_404">
                        <b>Error 404.</b>    
                    </p>
                    <p className="P_de_404">
                    el URL ingresado  no fue encontrado en este servidor. 
                    </p>
                    <ins>reintente ingresando la dirección.</ins>
{/* 
                <Link to="/">
                    <img src={img} alt="logo"/>
                </Link> */}
            </div>
        </div>
    );
}

export default Error404;
