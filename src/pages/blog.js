import Layout from "~/components/Layout"
import ListaEntradas from "~/components/lista-entradas"
export default function Blog({ entradas }) {
  return (
    <Layout
      title={"Blog"}
      description={"Cursos y contenido sobre remeras y negocios"}
    >
      <main className="container">
        <h1 className="heading">Blog</h1>
        <ListaEntradas entradas={entradas} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const req = await fetch(`${process.env.API_URL}/api/posts?populate=imagen`)
  const { data } = await req.json()

  return {
    props: {
      entradas: data,
    },
  }
}
