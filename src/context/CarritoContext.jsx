import React, {createContext, useState} from 'react';


const CarritoContext =createContext()

const CarritoProvider = ({children}) => {
  
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (prod, cant) =>{
    const aux= carrito
    let indice = aux.findIndex(producto=> producto.id == prod.id);

        if(indice !== -1) {
            aux[indice].stock= cant
        } else {
          const id = prod[0]
          const x = prod[1]
          const prodCarrito = {id, ...x, cantidad: cant}
          aux.push(prodCarrito)
        }
        setCarrito(structuredClone(aux))

  }
  const quitarProducto = (prod) => {
    const aux= carrito
    let indice = aux.findIndex(producto=> producto.id == prod.id);

    aux.splice(indice,1)
    setCarrito(structuredClone(aux))
  }

  
  return (
    <>
        <CarritoContext.Provider value={{carrito, agregarProducto, quitarProducto}}>
          {children}
        </CarritoContext.Provider>
    </>
  );
}

export {CarritoContext, CarritoProvider} ;
