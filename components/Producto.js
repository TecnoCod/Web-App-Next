import Image from 'next/image';
import Link from 'next/link';
import styles from "../styles/Productos.module.css"

const Producto = ({product}) => {

  const {nombre, imagen, precio, descripcion, url} = product;
  return (
    <div className={styles.productos}>
      <Image layout='responsive' width={180} height={350} src={imagen.url} alt={`imagen ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Producto