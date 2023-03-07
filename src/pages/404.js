import Link from "next/link"
import Layout from "~/components/Layout"
const p404 = () => {
  return (
    <Layout title={"Pagina no encontrada"}>
      <h1 className="heading"> Error, Página no encontrada </h1>
      <Link href="/" legacyBehavior>
        <a className="link-inicio">Inicio</a>
      </Link>
    </Layout>
  )
}

export default p404
