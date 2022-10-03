import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import data from '../../json/data.json'
export default function Producto() {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
            
            useEffect (() => {
                console.log(data);
                console.log(id);
                fetch("../../json/producto.json" ,
                  )
                .then(response => response.json())
                .then(productos => {
                    console.log(productos);
                    const producto1 =productos.find(productoArray => productoArray.id ===id)
                    console.log(producto1)

                })

            },[])






    return (
        <>
        
        </>
)
}
