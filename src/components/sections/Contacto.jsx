import { useScrollFade } from "@/hooks/useScrollFade"
import styles from "./Contacto.module.css"

export default function Contacto() {
  const ref = useScrollFade()
  return (
    <section id="contacto" ref={ref} className={styles.section}>
      <div className="sec-inner">
        <div className={styles.grid}>
          <div className={`${styles.info} fade-up`}>
            <p className={styles.label}>[05.00] — CONTACTO</p>
            <h2 className={styles.h2}>INICIA UN<br/>PROYECTO.</h2>
            <p className={styles.p}>Abierto a proyectos de consultoría, arquitectura y formación en DevOps &middot; Cybersecurity &middot; AI. Respuesta en menos de 24h.</p>
            <div className={styles.details}>
              <div className={styles.row}><span className={styles.k}>// mail</span><span className={styles.v}>hola@archsys.io</span></div>
              <div className={styles.row}><span className={styles.k}>// base</span><span className={styles.v}>Madrid, España · Remote OK</span></div>
              <div className={styles.row}><span className={styles.k}>// horario</span><span className={styles.v}>Lun–Vie 09:00–19:00 CET</span></div>
            </div>
          </div>
          <div className={`${styles.formCard} fade-up fade-up-d2`}>
            <div className={styles.fg}><label className={styles.fl}>Nombre</label><input type="text" className={styles.fi} placeholder="Tu nombre completo"/></div>
            <div className={styles.fg}><label className={styles.fl}>Email</label><input type="email" className={styles.fi} placeholder="correo@empresa.com"/></div>
            <div className={styles.fg}><label className={styles.fl}>Servicio</label><input type="text" className={styles.fi} placeholder="DevOps / Cybersec / AI / Otro"/></div>
            <div className={styles.fg}><label className={styles.fl}>Mensaje</label><textarea className={styles.fta} rows={4} placeholder="Cuéntame sobre tu proyecto..."/></div>
            <button className={styles.submit}>Enviar mensaje →</button>
          </div>
        </div>
      </div>
    </section>
  )
}
