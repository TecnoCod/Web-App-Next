
import Layout from '../../components/Layout'
import Image from 'next/image';
import styles from "../../styles/Productos.module.css"
import { useState } from 'react';

const Producto = ({product, agregarCarrito}) => {
  
  const [cantidad, setCantidad] = useState(1);
  const {descripcion, imagen, nombre, precio, id} = product[0]

  const hanledSubmit = (e) => {
    e.preventDefault();

    if(cantidad < 1){
      alert('Cantidad no Valida')
      return;
    }
    const seleccion ={
      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad,
    }
    agregarCarrito(seleccion);
  }

  return (
    <Layout
      pagina={`Producto - ${nombre}`}
    >
      <div className={styles.productos}>
        <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`imagen ${nombre}`}/>
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={hanledSubmit}>
            <label>Cantidad:</label>
            <select
              value={cantidad}
              onChange={e => setCantidad(parseInt(e.target.value))}
            >
              <option value="">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>

            <input
              type="submit"
              value="Agregar al carrito"
            />
          </form>
        </div>
      </div>
    </Layout>

  )
}

export async function getServerSideProps({query: {url}}){
  const urlApi = `${process.env.API_URL}/guitarras?url=${url}`
  const response = await fetch(urlApi)
  const product = await response.json()
  return {
    props:{
      product
    }
  }
}

export default Producto