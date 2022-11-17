import {createOrdenCompra, getOrdenCompra} from './firebase.js'

const producto = { 
    "nombre": "Diogo Costa",
    "price": 35,
    "Category_id": 3,
    "stock": 3,
    "img": "https://firebasestorage.googleapis.com/v0/b/react-coder-house22.appspot.com/o/imagenes%20cartas%2FDiogo-costa.png?alt=media&token=9c5bdf13-e628-48c1-ba15-bb939ec29174",
    "Direccion": "Qatar 2022"
}



createOrdenCompra(35, "Diogo", "Costa", "qatar2022@hotmail.com", 18122022, "Qatar 2022").then(orden => {
    alert(orden)
})

getOrdenCompra("UTKHpA46Uvs43P3Jh5IX").then(orden => {
    console.log(orden.id)
})
