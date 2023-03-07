import Image from "next/image"
import Link from "next/link"
const Remera = ({ remera }) => {
  const { titulo, url, imagen } = remera
  const img = imagen.data.attributes

  return (
    <div className="remera">
      <h4 className="titulo">{titulo}</h4>
      <Image
        src={img.url}
        alt={`Remera ${titulo}`}
        width={img.width}
        height={img.height}
      />
      <Link href={`/tienda/${url}`} legacyBehavior>
        <a className="link">Ver</a>
      </Link>
    </div>
  )
}

export default Remera
