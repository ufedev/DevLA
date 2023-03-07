const ArticuloCarrito = ({ remera, handleEliminarCarrito, agregarCarrito }) => {
  const { titulo, imagen, precio, cantidad, id } = remera

  const handleChange = (e) => {
    const remeraAct = { ...remera, cantidad: e.target.value }
    agregarCarrito(remeraAct)
  }
  return (
    <div className="articulo-carrito">
      <img src={imagen} alt={`imagen ${titulo}`} />
      <div className="contenido-carr">
        <h4 className="nombre">{titulo}</h4>
        <p className="precio">Precio Unidad: $ {precio}</p>
        <p className="descripcion">SubTotal: $ {precio * cantidad}</p>
        <p className="cantidad">Cantidad:</p>
        <div className="form">
          <select value={cantidad} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={(e) => handleEliminarCarrito(e, id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArticuloCarrito
