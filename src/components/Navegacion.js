import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
const Navegacion = ({ header = false }) => {
  const router = useRouter()

  return (
    <nav className={header ? "navh" : "nav"}>
      <Link href="/" legacyBehavior>
        <a className={header && router.pathname === "/" ? "active" : ""}>
          Inicio
        </a>
      </Link>
      <Link legacyBehavior href="/tienda">
        <a className={header && router.pathname === "/tienda" ? "active" : ""}>
          Tienda
        </a>
      </Link>
      <Link legacyBehavior href="/blog">
        <a className={header && router.pathname === "/blog" ? "active" : ""}>
          Blog
        </a>
      </Link>
      <Link legacyBehavior href="/nosotros">
        <a
          className={header && router.pathname === "/nosotros" ? "active" : ""}
        >
          Nosotros
        </a>
      </Link>
      <Link legacyBehavior href="/carrito">
        <a className={header && router.pathname === "/carrito" ? "active" : ""}>
          <Image
            src="/img/carrito.svg"
            width={"25"}
            height={"25"}
            alt="carrito de compras"
          />
        </a>
      </Link>
    </nav>
  )
}

export default Navegacion
