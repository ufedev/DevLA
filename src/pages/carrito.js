import Layout from "~/components/Layout"
import ArticuloCarrito from "~/components/articulo-carrito"
import { useState, useEffect } from "react"

export default function Carrito({
  carrito,
  handleEliminarCarrito,
  agregarCarrito,
}) {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const t = carrito.reduce(
      (precioTotal, remera) => precioTotal + remera.cantidad * remera.precio,
      0
    )
    setTotal(t)
  }, [carrito])

  return (
    <Layout title="Carrito">
      <main className="container carrito">
        <h2 className="heading">Carrito</h2>

        <div className="carrito contenido">
          <div className="articulos">
            <h3>Articulos</h3>
            {carrito?.length > 0
              ? carrito?.map((remera) => (
                  <ArticuloCarrito
                    key={remera.id}
                    remera={remera}
                    handleEliminarCarrito={handleEliminarCarrito}
                    agregarCarrito={agregarCarrito}
                  />
                ))
              : "Carrito Vacio"}
          </div>
          <div className="carrito-resumen ">
            <h3>Resumen del Pedido</h3>
            <p>{carrito?.length > 0 ? `Total a Pagar $${total}` : ""}</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
