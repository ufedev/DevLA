import "~/styles/globals.css"
import "~/styles/tienda.css"
import "~/styles/blog.css"
import "~/styles/promo.css"
import "~/styles/carrito.css"
import { useState, useEffect } from "react"
export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("carrito_compras_devLa_next")) ?? []

  const [carrito, setCarrito] = useState(carritoLS)
  const [pagina, setPagina] = useState(false)

  useEffect(() => {
    localStorage.setItem("carrito_compras_devLa_next", JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = (guitarra) => {
    if (carrito.some((guitar) => guitar.id === guitarra.id)) {
      const carritoAct = carrito.map((guitar) => {
        if (guitar.id === guitarra.id) {
          guitar.cantidad = guitarra.cantidad
        }
        return guitar
      })
      setCarrito(carritoAct)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }
  const handleEliminarCarrito = (e, id) => {
    e.preventDefault()
    const carritoActualizado = carrito.filter((guitar) => guitar.id !== id)
    const confirmar = confirm("Seguro desea eliminar?")

    if (confirmar) {
      setCarrito(carritoActualizado)
    }
  }
  useEffect(() => {
    setPagina(true)
  }, [])
  return pagina ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      handleEliminarCarrito={handleEliminarCarrito}
    />
  ) : null
}
