import Navegacion from "./Navegacion"
import Image from "next/image"
import Link from "next/link"
import styles from "~/styles/header.module.css"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.contenido}`}>
        <Link href="/">
          <Image
            src="/img/Logo.png"
            width={"300"}
            height={"81"}
            alt="Logo"
            property="priority" //consejo de next
          />
        </Link>
        <Navegacion header={true} />
      </div>
    </header>
  )
}

export default Header
