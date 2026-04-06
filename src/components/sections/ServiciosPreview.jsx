import { services } from "@/data/services"
import { useScrollFade } from "@/hooks/useScrollFade"
import styles from "./ServiciosPreview.module.css"

const ICONS = {
  neon:   <svg viewBox="0 0 22 22" fill="none" stroke="#00CC7A" strokeWidth="1.5"><circle cx="11" cy="11" r="9"/><path d="M7 11 L11 7 L15 11"/><line x1="11" y1="7" x2="11" y2="16"/></svg>,
  cyan:   <svg viewBox="0 0 22 22" fill="none" stroke="#00B4D8" strokeWidth="1.5"><path d="M11 2 L19 6 L19 13 Q19 18 11 21 Q3 18 3 13 L3 6 Z"/><circle cx="11" cy="12" r="3"/></svg>,
  purple: <svg viewBox="0 0 22 22" fill="none" stroke="#8B5CF6" strokeWidth="1.5"><rect x="7" y="7" width="8" height="8" rx="1"/><line x1="11" y1="2" x2="11" y2="7"/><line x1="11" y1="15" x2="11" y2="20"/><line x1="2" y1="11" x2="7" y2="11"/><line x1="15" y1="11" x2="20" y2="11"/></svg>,
}
const TOP = { neon:"linear-gradient(90deg,var(--neon),var(--cyan))", cyan:"linear-gradient(90deg,var(--cyan),var(--neon))", purple:"linear-gradient(90deg,var(--purple),var(--cyan))" }

export default function ServiciosPreview() {
  const ref = useScrollFade()
  return (
    <section id="servicios" ref={ref} className={styles.section}>
      <div className="sec-inner">
        <p className={`${styles.label} fade-up`}>[02.00] — SERVICIOS</p>
        <h2 className="fade-up fade-up-d1">ESPECIALIDADES<br/>TÉCNICAS</h2>
        <p className="sec-intro fade-up fade-up-d2">Tres pilares técnicos con enfoque orientado a resultados medibles.</p>
        <div className={styles.grid}>
          {services.map((s,i) => (
            <div key={s.id} className={`${styles.card} fade-up fade-up-d${i+2}`} style={{"--top-grad": TOP[s.accent]}}>
              <p className={styles.idx}>{s.index}</p>
              <div className={styles.icon}>{ICONS[s.accent]}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.description}</p>
              <div className={styles.stack}>{s.stack.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
