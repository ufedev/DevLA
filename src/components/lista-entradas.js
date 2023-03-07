import Entrada from "~/components/Entrada"

const ListaEntradas = ({ entradas }) => {
  return (
    <div className="lista-entradas">
      {entradas?.map((entrada) => (
        <Entrada key={entrada.id} entrada={entrada.attributes} />
      ))}
    </div>
  )
}

export default ListaEntradas
