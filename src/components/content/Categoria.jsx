import {useState,useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/funcionesUtiles';

const Categoria = () => {
        const [productos, setProductos] = useState([]);
        const {name_category}=useParams()

        useEffect(()=>{
            consultarBDD('/json/producto.json')
            .then(productos =>{
                const productosCategoria = productos.filter(producto => producto.name_category ===name_category)
                    const cardProducto = productosCategoria.map(producto => 
                        <div className='contenedorItem'>
                                            <div className='cardsContainer'>
                                                <div className="card">
                                                        <img src={`../img/${producto.img}`} alt="logo" className="card-image" />
                                                            <div className="card-contenido">
                                                                <p className="price">$ {producto.price}</p>
                                                                <span className="favorite">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}><path d="M0 0h24v24H0z" fill="none" /><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                                                                </span>
                                                            </div>
                                                            <div className="card-btn-carrito">
                                                                <button className='btn5'><Link to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                                                                <Link to='#'><button className='Button-Carrito'>Agregar al carrito</button></Link>
                                                            </div>
                                                </div>
                                            </div>          
                                    </div>
                                    )
                        
                        setProductos(cardProducto)
            })

        }, [name_category]);

    return (
    <div className='row' style={{margin: "11.2rem 0"}}>
        {productos}
    </div>
)
}

export default Categoria;
