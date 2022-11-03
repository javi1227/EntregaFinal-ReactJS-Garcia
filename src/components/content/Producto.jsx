import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import { getProducto } from '../../utils/firebase';
import Detalle from '../content/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css';
export default function Producto() {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       getProducto(id).then(prod => {
        console.log(prod,"prodqweq");
        setProducto(prod)
    })
    }, [])

    if (producto.length != 0) {
        return (
                <>
                    <Detalle producto={producto}/>
                </>
        )
    }}
