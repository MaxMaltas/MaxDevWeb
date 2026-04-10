import { Link } from "react-router-dom"
import styles from "./ProjectCard.module.css"

const ICONS = {
  devops: <svg viewBox="0 0 120 120" fill="none"><rect x="10" y="50" width="22" height="20" rx="2" stroke="#00CC7A" strokeWidth="1.5"/><rect x="49" y="50" width="22" height="20" rx="2" stroke="#00CC7A" strokeWidth="1.5"/><rect x="88" y="50" width="22" height="20" rx="2" stroke="#00CC7A" strokeWidth="1.5"/><line x1="32" y1="60" x2="49" y2="60" stroke="#00CC7A" strokeWidth="1" strokeDasharray="3 2"/><line x1="71" y1="60" x2="88" y2="60" stroke="#00CC7A" strokeWidth="1" strokeDasharray="3 2"/><circle cx="60" cy="28" r="13" stroke="#00B4D8" strokeWidth="1.5"/><line x1="60" y1="41" x2="60" y2="50" stroke="#00B4D8" strokeWidth="1"/></svg>,
  cyber:  <svg viewBox="0 0 120 120" fill="none"><path d="M60 14 L96 35 L96 70 Q96 96 60 109 Q24 96 24 70 L24 35 Z" stroke="#00B4D8" strokeWidth="1.5"/><circle cx="60" cy="63" r="14" stroke="#00B4D8" strokeWidth="1.5"/><circle cx="60" cy="63" r="4" fill="#00B4D8"/></svg>,
  ai:     <svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="16" stroke="#8B5CF6" strokeWidth="1.5"/><circle cx="28" cy="40" r="8" stroke="#8B5CF6" strokeWidth="1"/><circle cx="92" cy="40" r="8" stroke="#8B5CF6" strokeWidth="1"/><circle cx="28" cy="80" r="8" stroke="#8B5CF6" strokeWidth="1"/><circle cx="92" cy="80" r="8" stroke="#8B5CF6" strokeWidth="1"/><line x1="36" y1="44" x2="48" y2="52" stroke="#8B5CF6" strokeWidth="1" opacity=".6"/><line x1="84" y1="44" x2="72" y2="52" stroke="#8B5CF6" strokeWidth="1" opacity=".6"/><circle cx="60" cy="60" r="4" fill="#8B5CF6"/></svg>,
  cloud:  <svg viewBox="0 0 120 120" fill="none"><path d="M28 68 Q18 68 18 57 Q18 44 32 44 Q33 30 47 28 Q60 26 66 40 Q74 36 82 41 Q94 45 92 57 Q102 59 100 68 Z" stroke="#F0C040" strokeWidth="1.5"/><line x1="48" y1="68" x2="48" y2="88" stroke="#F0C040" strokeWidth="1.5"/><line x1="60" y1="68" x2="60" y2="88" stroke="#F0C040" strokeWidth="1.5"/><line x1="72" y1="68" x2="72" y2="88" stroke="#F0C040" strokeWidth="1.5"/><line x1="38" y1="88" x2="82" y2="88" stroke="#F0C040" strokeWidth="1.5"/></svg>,
}
const GRADS = {
  devops: "linear-gradient(135deg,#0a1410,#0e1f18,rgba(0,204,122,.12))",
  cyber:  "linear-gradient(135deg,#0a1018,#0e1620,rgba(0,180,216,.12))",
  ai:     "linear-gradient(135deg,#100a1a,#160f22,rgba(139,92,246,.12))",
  cloud:  "linear-gradient(135deg,#161200,#1e1800,rgba(240,192,64,.1))",
}
const BAR = { neon:"linear-gradient(90deg,var(--neon),var(--cyan))", cyan:"linear-gradient(90deg,var(--cyan),var(--neon))", purple:"linear-gradient(90deg,var(--purple),var(--cyan))", gold:"linear-gradient(90deg,var(--gold),var(--neon))" }
const LINK_COL = { neon:"var(--neon)", cyan:"var(--cyan)", purple:"var(--purple)", gold:"var(--gold)" }

export default function ProjectCard({ project, className="" }) {
  const { slug, title, category, description, tags, gradient, accent, size, github } = project
  return (
    <article className={`${styles.card} ${styles[size]} ${className}`}>
      <div className={styles.img}>
        <div className={styles.grad} style={{background:GRADS[gradient]}}>
          <span className={styles.icon}>{ICONS[gradient]}</span>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.cat}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.tags}>{tags.map(t=><span key={t} className={styles.tag}>{t}</span>)}</div>
        <div className={styles.actions}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link} style={{color:LINK_COL[accent]}}>
              Ver en GitHub
            </a>
          )}
        </div>
      </div>
      <div className={styles.bar} style={{background:BAR[accent]}}/>
    </article>
  )
}
