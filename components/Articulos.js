import { formatearFecha } from "../helpers";
import Producto from "./Producto";
import styles from "../styles/Articulos.module.css"

const Articulos = ({products}) => {


  return (
    <div className={styles.articulos}>
      {products.map(product => (
        <Producto key={product.url} product={product}/>
      ))}
    </div>
  )
}

export default Articulos