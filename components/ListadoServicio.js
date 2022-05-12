import Entrada from "../components/Entrada";
import styles from '../styles/Servicios.module.css'

const ListadoServicio = ({datos}) => {
  return (
    <>
      <h2 className="heading">Servicios</h2>
      <div className={styles.servicio}>
        {datos.map(data => (
          <Entrada key={data.id} data={data}/>
        ))}
      </div>
    </>
  )
}

export default ListadoServicio