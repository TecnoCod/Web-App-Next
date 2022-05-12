import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrada = () => {
  return (
    <div className={styles.no_encontrado}>
      <h2 className="heading">404 Pagina no Encontrada</h2>
      <Link href="/">Volver al Inicio</Link>
    </div>
    
  )
}

export default NoEncontrada