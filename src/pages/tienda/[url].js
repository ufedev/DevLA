import Layout from "~/components/Layout"
import Image from "next/image"
import { useState } from "react"
const remera = ({ agregarCarrito, rem }) => {
  console.log(rem)
  const [cantidad, setCantidad] = useState(0)
  const { titulo, descripcion, imagen, precio } = rem[0].attributes
  const img = imagen.data.attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if (cantidad < 1) {
      alert("Debe colocar una cantidad! :)")
      return
    }

    const remera = {
      id: rem[0].id,
      titulo,
      precio,
      cantidad,
      imagen: imagen.data.attributes.url,
    }

    agregarCarrito(remera)
  }
  return (
    <Layout title={`${titulo}`} description={`Indumentaria / Remera ${titulo}`}>
      <main className="container">
        <div className="remera-unitaria">
          <Image
            src={img.url}
            width={img.width}
            height={img.height}
            alt={`Imagen ${titulo}`}
          />
          <div className="contenido">
            <h3>{titulo}</h3>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">${precio}</p>
            <form onSubmit={handleSubmit}>
              <label>Cantidad:</label>
              <select
                onChange={(e) => {
                  setCantidad(e.target.value)
                }}
              >
                <option value="0">-seleccione-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input type="submit" value="Agregar al carrito" />
            </form>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticPaths() {
  //obtenemos los paths

  const req = await fetch(`${process.env.API_URL}/api/remeras`)
  const { data } = await req.json()

  const paths = data.map((remera) => ({
    params: {
      url: remera.attributes.url,
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
    `${process.env.API_URL}/api/remeras?filters[url]=${url}&populate=imagen`
  )
  const { data } = await req.json()
  return {
    props: {
      rem: data,
    },
  }
}

// export async function getServerSideProps({ params }) {
//   const { url } = params

//   const req = await fetch(
//     `${process.env.API_URL}/api/remeras?filters[url]=${url}&populate=imagen`
//   )
//   const { data } = await req.json()

//   return {
//     props: {
//       rem: data, // la req devuelve un array con el objeto pedido.. (esto es Strapi)
//       // devolvemos solo los attr
//     },
//   }
// }

export default remera
