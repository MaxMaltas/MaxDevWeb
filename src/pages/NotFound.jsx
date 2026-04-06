import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"
export default function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>PÁGINA NO ENCONTRADA</h1>
      <p className={styles.sub}>La ruta que buscas no existe o fue movida.</p>
      <Link to="/" className={styles.btn}>← Volver al inicio</Link>
    </div>
  )
}
