
import Articulos from '../components/Articulos'
import Bloque from '../components/Bloque'
import Layout from '../components/Layout'
import ListadoServicio from "../components/ListadoServicio"

export default function Home({guitarra,bloque,servicios}) {

  return (
      <Layout
        pagina="Inicio"
        guitarra={guitarra[3]}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <Articulos 
            products={guitarra}
          />
        </main>

        <Bloque
          bloque={bloque}
        />
        <section className="contenedor">
          <ListadoServicio
            datos={servicios}
          />
        </section>

      </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarra = `${process.env.API_URL}/guitarras`
  const urlBloque = `${process.env.API_URL}/bloque`
  const urlServicios = `${process.env.API_URL}/servicios?_limit=3`

  const [resGuitarra, resBloque, resServicios] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlBloque),
    fetch(urlServicios)
  ])
  const [guitarra, bloque, servicios] = await Promise.all([
    resGuitarra.json(),
    resBloque.json(),
    resServicios.json()
  ])

  return {
    props:{
      guitarra,
      bloque,
      servicios
    }
  }
}