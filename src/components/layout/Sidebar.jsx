import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { navLinks, socialLinks } from "@/data/navigation"
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e, link) => {
    e.preventDefault(); setOpen(false)
    if (link.href === "/" || location.pathname === link.href) {
      const el = document.querySelector(link.hash)
      el ? el.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0 })
    } else { navigate(link.href) }
  }

  return (
    <>
      <button className={`${styles.hamburger} ${open ? styles.hOpen : ""}`} onClick={() => setOpen(v => !v)} aria-label="Menu">
        <span/><span/><span/>
      </button>
      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
      <aside className={`${styles.sidebar} ${open ? styles.sOpen : ""}`}>
        <a href="/" className={styles.logo} onClick={e => handleClick(e, { href:"/", hash:"#hero" })}>
          <span className={styles.acc}>{`{`}</span> ARCH.SYS <span className={styles.acc}>{`}`}</span>
        </a>
        <div className={styles.status}><span className={styles.dot}/> AVAILABLE FOR HIRE</div>
        <nav className={styles.nav}>
          {navLinks.map(link => (
            <a key={link.index} href={link.href} className={styles.link} onClick={e => handleClick(e, link)}>
              <span className={styles.idx}>{link.index}</span>{link.label}
            </a>
          ))}
        </nav>
        <div className={styles.cta}>
          <a href="/#contacto" className={styles.ctaBtn} onClick={e => handleClick(e, { href:"/", hash:"#contacto" })}>
            // Iniciar proyecto
          </a>
          <div className={styles.socials}>
            {socialLinks.map(s => <a key={s.label} href={s.href} className={styles.social} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
          </div>
        </div>
      </aside>
    </>
  )
}
