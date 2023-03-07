import Layout from "~/components/Layout"
import ListaRemeras from "~/components/lista-remeras"
export default function Tienda({ remeras }) {
  return (
    <Layout
      title={"Tienda"}
      description={"Las Mejores remeras con los mejores diseños"}
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>
        <ListaRemeras remeras={remeras} />
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const req = await fetch(`${process.env.API_URL}/api/remeras?populate=imagen`)
  const { data } = await req.json()
  return {
    props: {
      remeras: data,
    },
  }
}
