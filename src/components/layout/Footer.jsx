import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}><span className={styles.acc}>{`{`}</span> ARCH.SYS <span className={styles.acc}>{`}`}</span></span>
      <span>&copy; {new Date().getFullYear()} &middot; Todos los derechos reservados</span>
      <span>DEVOPS &middot; CYBERSEC &middot; AI</span>
    </footer>
  )
}
