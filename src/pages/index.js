import Layout from "./../components/Layout"
import ListaRemeras from "~/components/lista-remeras"
import ListaEntradas from "~/components/lista-entradas"

export default function Home({ remeras, entradas, promos }) {
  const { titulo, descripcion, imagen } = promos.attributes
  const img = imagen.data.attributes.url
  return (
    <Layout
      title={"Inicio"}
      description={
        "Venta de Indumentaria y Cursos para emprender tu propio Negocio"
      }
    >
      <main className="container">
        <h1 className="heading">Nuestra Colección</h1>
        <ListaRemeras remeras={remeras} />
      </main>
      <section className="promo">
        <style jsx="true">
          {`
            .promo {
              height: 30rem;
              background-image: linear-gradient(
                  to right,
                  rgb(0 0 0 /0.75),
                  rgb(0 0 0 /0.85)
                ),
                url(${img});
              background-position: center center;
              padding: 5rem 0;
              background-size: cover;
            }
          `}
        </style>
        <div className="container grid-promo">
          <div className="contenido-promo">
            <h2 className="heading">{titulo}</h2>
            <p className="descripcion-promo">{descripcion}</p>
          </div>
        </div>
      </section>
      <section className="container">
        <ListaEntradas entradas={entradas} />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const [rem, ent, pr] = await Promise.all([
    fetch(`${process.env.API_URL}/api/remeras?populate=imagen`),
    fetch(`${process.env.API_URL}/api/posts?populate=imagen`),
    fetch(`${process.env.API_URL}/api/promo?populate=imagen`),
  ])
  const [remeras, entradas, promos] = await Promise.all([
    rem.json(),
    ent.json(),
    pr.json(),
  ])

  return {
    props: {
      remeras: remeras.data,
      entradas: entradas.data,
      promos: promos.data,
    },
  }
}
