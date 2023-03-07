import Remera from "./Remera"

const ListaRemeras = ({ remeras }) => {
  return (
    <div className="lista-remeras">
      {remeras.map((remera) => (
        <Remera key={remera.id} remera={remera.attributes} />
      ))}
    </div>
  )
}

export default ListaRemeras
