import Articulos from '../components/Articulos'
import Layout from '../components/Layout'

const Tienda = ({products}) => {

  return (
    <Layout
      pagina="Tienda Virtual"
    >
      <main>
        <h1 className="heading">Nuestra Tienda</h1>
        <Articulos products={products}/>

      </main>

    
    </Layout>
  )
}

export async function getServerSideProps() {

  const urlApi = `${process.env.API_URL}/guitarras?_sort=precio:asc`
  const response = await fetch(urlApi)
  const products = await response.json()

  return {
    props:{
      products
    }
  }
}

export default Tienda