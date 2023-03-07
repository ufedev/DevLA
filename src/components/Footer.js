import styles from "~/styles/footer.module.css"
import Navegacion from "./Navegacion"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.contenido}`}>
        <Navegacion />
        <p>Todos los derechos reservados &copy;</p>
      </div>
    </footer>
  )
}

export default Footer
