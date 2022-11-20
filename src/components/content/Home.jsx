import React,{useState,useContext,useEffect}from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { getProductos } from "../../utils/firebase";
import Mascota from '../../assets/images/mascota.png'
import { Link } from "react-router-dom";
import "../../assets/css/Home.css";

const Home = () => {
    const [productos, setProductos] = useState([]);
    const { agregarProducto } = useContext(CarritoContext);
    
    useEffect(() => {
        getProductos().then((productos) => {
            const cardProducto = productos.filter(producto => producto.Category_id === 5).map((producto) => (
                    <div className="contenedorItem" key={producto}>
                        <div className="cardsContainer">
                            <div className="card">
                                <img src={producto.img} alt="logo" className="card-image" />
                                <div className="card-contenido">
                                    <p className="price">$ {producto.price}</p>
                                </div>
                                <div className="card-btn-carrito">
                                    <button className="btn5">
                                        <Link to={`/producto/${producto.id}`}>Ver Detalles</Link>
                                    </button>
                                    <Link to="#">
                                        <button
                                        className="Button-Carrito"
                                        onClick={() => {
                                            agregarProducto(producto, 1);
                                        }}
                                        >
                                        Agregar al carrito
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            ));
            setProductos(cardProducto);
        });
}, []);
    return (
        <>
            <div className="contHome">
                <div className="contenedorBannerText">
                    <div className="textoCont">
                            <h1>Disfruta de este mundial Junto a Goat !!</h1>
                            <p>Te faltan figuritas para llenar tu albúm Goat? Aquí podrás comprar esa figurita dificíl sin problemas.</p>
                            <p>Siguenos en nuestras redes!</p>
                        <div className="linksCont">
                            <a href='https://www.github.com/javi1227' target={"_blank"}>
                                <i className="iconCont bi bi-github"></i>
                            </a>
                            <a href='https://www.linkedin.com/in/javiergarcia1227/' target={"_blank"}>
                                <i className="iconCont bi bi-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                    <div className="imgHome">
                        <img src={Mascota} alt="mascota"/>   
                    </div>
            
            </div>
                <div className='contenedorPremium'>
                    <div className="textoCont">
                        <h1>PRODUCTOS PREMIUM</h1>
                        <p>Tenemos figuritas especiales que solamente se pueden comprar por la web oficial de Goat.</p>
                    </div>
                    <div className="productosConteinerHome">
                        {productos}
                    </div>
                </div>

        </>
    );
}

export default Home;
