import {useState, useEffect} from 'react';
import '../styles/globals.css';
import '../styles/normalize.css';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  // useEffect(() => {
  //   const carritoLocal = JSON.parse(localStorage.getItem("carrito") ?? [])
  //   setCarrito(carritoLocal)
  // }, []);
  

  // useEffect(() => {
  //   localStorage.setItem("carrito", JSON.stringify(carrito));
  // }, [carrito]);

  const agregarCarrito = producto => {
    if(carrito.some(articulo => articulo.id === producto.id)){
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      setCarrito(carritoActualizado);
    }else{ 
      setCarrito([...carrito, producto]);
    }
  }

  const actualizarCantidades = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  };
  
  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(articulo => articulo.id != id);
    setCarrito(carritoActualizado);
  }

  return <Component {...pageProps} 
    carrito={carrito} 
    agregarCarrito={agregarCarrito} 
    actualizarCantidades={actualizarCantidades}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp
