import Layout from "../components/Layout";
import ListadoServicio from "../components/ListadoServicio";

const Servicios = ({ datos }) => {
  return (
    <Layout pagina="Servicios">
      <main className="contenedor">
        <ListadoServicio datos={datos} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/servicios`;
  const response = await fetch(url);
  const datos = await response.json();

  return {
    props: {
      datos,
    },
  };
}

export default Servicios;
