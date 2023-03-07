import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
const Entrada = ({ entrada }) => {
  const { titulo, descripcion, imagen, publishedAt, url } = entrada
  const img = imagen.data.attributes
  return (
    <div className="entrada">
      <Image
        src={img.url}
        width={img.width}
        height={img.height}
        alt={`Imagen ${titulo}`}
      />
      <div>
        <h3>{titulo}</h3>
        <p className="descripcion-entrada">{descripcion}</p>
        <p className="published-entrada">
          Publicado hace{" "}
          {formatDistanceToNow(new Date(publishedAt), {
            locale: es,
          })}
        </p>
        <Link href={`/blog/${url}`} legacyBehavior>
          <a className="link-entrada">Ver Post</a>
        </Link>
      </div>
    </div>
  )
}

export default Entrada
