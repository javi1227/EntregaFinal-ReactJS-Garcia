import React, {createContext, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CarritoContext =createContext()

const CarritoProvider = ({children}) => {
  
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (prod, cant) =>{
    const aux= carrito
    let indice = aux.findIndex(producto=> {
      return producto.id == prod.id
    });

    
    if(indice !== -1) {
      if((aux[indice].cantidad + cant) <= aux[indice].stock){
        aux[indice].cantidad+= cant
        mensajeOk()
      }else {   
        mensajeFail()
      }
        } else {
          const id = prod.id
          const x = prod
          const prodCarrito = {id, ...x, cantidad: cant}
          aux.push(prodCarrito)
          mensajeOk()
        }
        setCarrito(structuredClone(aux))

  }
  const quitarProducto = (prod) => {
    const aux= carrito
    let indice = aux.findIndex(producto=> producto.id === prod.id);

    aux.splice(indice,1)
    setCarrito(structuredClone(aux))
  }
  const clearCart = () => setCarrito([])

  const mensajeOk =()=>{
    toast.success('PRODUCTO AGREGADO!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });  
  }
  const mensajeFail =() =>{
    toast.error('PRODUCTO SIN STOCK!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  
  return (
    <>
        <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto, setCarrito, clearCart}}>
          {children}
        </CarritoContext.Provider>
        <ToastContainer />
    </>
  );
}

export {CarritoContext, CarritoProvider} ;
