import Layout from "~/components/Layout"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
export default function Entrada({ ent }) {
  const entrada = ent[0].attributes
  const { titulo, descripcion, publishedAt, imagen } = entrada
  const img = imagen.data.attributes
  return (
    <Layout title={`${titulo}`} description={`Entrada sobre: ${descripcion}`}>
      <div className="container">
        <div className="entrada entrada-activa">
          <Image
            src={img.url}
            width={img.width}
            height={img.height}
            alt={`Imagen ${titulo}`}
          />
          <div>
            <h3>{titulo}</h3>
            <p className="descripcion-entrada-activa">{descripcion}</p>
            <p className="published-entrada">
              Publicado hace{" "}
              {formatDistanceToNow(new Date(publishedAt), {
                locale: es,
              })}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const req = await fetch(`${process.env.API_URL}/api/posts`)
  const { data } = await req.json()

  const paths = data.map((entrada) => ({
    params: {
      url: entrada.attributes.url,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { url } = params
  const req = await fetch(
    `${process.env.API_URL}/api/posts?filters[url]=${url}&populate=imagen`
  )
  const { data } = await req.json()

  return {
    props: {
      ent: data,
    },
  }
}
