import {useState,useEffect, useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
import { CarritoContext } from '../../context/CarritoContext';

const Categoria = () => {
        const [productos, setProductos] = useState([]);
        const {name_category}=useParams()
        const {agregarProducto} = useContext(CarritoContext)

        useEffect(()=>{
            getProductos()
            .then(productos =>{
                const productosCategoria = productos.filter(producto => producto.name_category ===name_category)
                    const cardProducto = productosCategoria.map(producto => 
                        <div className='contenedorItem'>
                            <div className='cardsContainer'>
                                <div className="card">
                                    <img src={producto.img} alt="logo" className="card-image" />
                                    <div className="card-contenido">
                                        <p className="price">$ {producto.price}</p>
                                    </div>
                                    <div className="card-btn-carrito">
                                        <button className='btn5'><Link to={`/producto/${producto.id}`}>Ver Detalles</Link></button>
                                        <Link to='#'><button className='Button-Carrito' onClick={()=>{agregarProducto(producto, 1)
                                            }} 
                                            >Agregar al carrito</button></Link>
                                    </div>
                                </div>
                            </div>          
                        </div>
                        )
                        
                        setProductos(cardProducto)
            })

        }, [name_category]);

    return (
    <div className='rowCategories' style={{display:"flex",gap:" 67px", padding:"3rem",    backgroundColor: "var(--theme-background-color)"}}>
        {productos}
    </div>
)
}

export default Categoria;
