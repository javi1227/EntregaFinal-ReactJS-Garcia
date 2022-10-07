import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import Detalle from '../content/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css';
export default function Producto() {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
            useEffect (() => {
                fetch("/json/producto.json" )
                .then(response => response.json())
                .then(productos => {
                    const producto1 =productos.find(productoArray => productoArray.id ===+id)
                    setProducto(producto1)
                })

            },[id])

    return (
        <>
            <Detalle producto={producto} />
        </>
)
}
