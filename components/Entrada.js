import Image from 'next/image';
import { formatearFecha } from '../helpers';
import styles from '../styles/Entrada.module.css'


const Entrada = ({data}) => {
  const {titulo, resumen, imagen, published_at, url} = data
  return (
    <article>
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p> 
      </div>
    </article>
  )
}

export default Entrada