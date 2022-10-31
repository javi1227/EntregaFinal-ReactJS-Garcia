// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc, updateDoc, deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY, //VARIABLE DE ENTORNO QUE INCLUYE LA APIKEY SE USA  PARA NO SUBIRLO DIRECTO YA QUE ESTA MAL
  authDomain: "react-coder-house22.firebaseapp.com",
  projectId: "react-coder-house22",
  storageBucket: "react-coder-house22.appspot.com",
  messagingSenderId: "478321723334",
  appId: "1:478321723334:web:5e288656b100d34aeb14c7",
  measurementId: "G-566115EDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async() => {
  const promise = await fetch ('/json/producto.json');
  const productos= await promise.json();
  productos.forEach(async(producto) => {
    await addDoc(collection(db, "productos"), {
        nombre: producto.nombre,
        Category_id: producto.Category_id,
        name_category: producto.name_category,
        stock: producto.stock,
        price: producto.price,
        img: producto.img,
        descripcion: producto.descripcion
    })
  })
}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}
const searchProducto = async (nombre) => {
  const producto = await getDoc(doc(db, "productos", nombre))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto => [producto.id, producto.data()])
  return items
}
const updateProducto =async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado;
}

const deleteProducto= async(id) => {
  const estado= await deleteDoc(doc(db,"productos", id))
  return estado;
}

const createProducto = async (objProd) =>{
  const estado =await addDoc(doc(db,"productos"),{
    nombre: objProd.nombre,
    Category_id: objProd.Category_id,
    name_category: objProd.name_category,
    stock: objProd.stock,
    price: objProd.price,
    img: objProd.img,
    descripcion: objProd.descripcion
  })

return estado
}

export {cargarBaseDeDatos, getProductos, getProducto, searchProducto, updateProducto, deleteProducto, createProducto}
