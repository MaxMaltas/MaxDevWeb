import { useScrollFade } from "@/hooks/useScrollFade"
import styles from "./About.module.css"

const SKILLS = [
  { label:"Kubernetes / Cloud Native", pct:96 },
  { label:"Cybersecurity & Threat Intel", pct:91 },
  { label:"MLOps & AI Systems", pct:88 },
  { label:"Infrastructure as Code", pct:94 },
]
const STATS = [
  {num:"8+",label:"Años"},{num:"40+",label:"Proyectos"},
  {num:"99.9",label:"% Uptime"},{num:"12",label:"Certs."},
]

export default function About() {
  const ref = useScrollFade()
  return (
    <section id="about" ref={ref} className={styles.section}>
      <div className="sec-inner">
        <div className={styles.grid}>
          <div>
            <div className={`${styles.terminal} fade-up`}>
              <div className={styles.tHeader}>
                <span className={styles.dot} style={{background:"#ff5f57"}}/><span className={styles.dot} style={{background:"#ffbd2e"}}/><span className={styles.dot} style={{background:"var(--neon)"}}/>
                <span className={styles.tTitle}>profile.sh</span>
              </div>
              <div className={styles.tBody}>
                <div><span className={styles.cmd}>$ </span>whoami</div>
                <div><span className={styles.out}>max_maltas</span></div><br/>
                <div><span className={styles.cmd}>$ </span>cat ./bio.json</div>
                <div><span className={styles.dim}>{"{"}</span></div>
                <div>&nbsp; "role": <span className={styles.str}>"Sr. DevOps & Security"</span>,</div>
                <div>&nbsp; "exp_years": <span className={styles.out}>8</span>,</div>
                <div>&nbsp; "location": <span className={styles.str}>"Barcelona, ES"</span>,</div>
                <div>&nbsp; "remote": <span className={styles.out}>true</span>,</div>
                <div>&nbsp; "focus": [<span className={styles.str}>"K8s"</span>, <span className={styles.str}>"AI"</span>, <span className={styles.str}>"ZeroTrust"</span>],</div>
                <div>&nbsp; "status": <span className={styles.cmd}>"available"</span></div>
                <div><span className={styles.dim}>{"}"}</span></div><br/>
                <div><span className={styles.cmd}>$ </span><span className={styles.cursor}>&nbsp;</span></div>
              </div>
            </div>
            <div className={`${styles.stats} fade-up fade-up-d2`}>
              {STATS.map(s=><div key={s.label} className={styles.stat}><div className={styles.statN}>{s.num}</div><div className={styles.statL}>{s.label}</div></div>)}
            </div>
          </div>
          <div>
            <p className={`${styles.label} fade-up`}>[04.00] — ABOUT</p>
            <h2 className="fade-up fade-up-d1">CONSTRUYO<br/>SISTEMAS<br/>RESILIENTES.</h2>
            <p className={`${styles.p} fade-up fade-up-d2`}>Ingeniero especializado en el cruce entre <strong>infraestructura, seguridad e inteligencia artificial</strong>. Diseño sistemas que escalan sin fricciones y resisten ataques reales.</p>
            <p className={`${styles.p} fade-up fade-up-d3`}>Mi enfoque combina profundidad técnica con visión de negocio: cada decisión de arquitectura tiene un impacto medible en <strong>coste, seguridad y velocidad de entrega</strong>.</p>
            <div className={`${styles.skills} fade-up fade-up-d4`}>
              {SKILLS.map(s=>(
                <div key={s.label} className={styles.sk}>
                  <div className={styles.skLabel}><span>{s.label}</span><span className={styles.skPct}>{s.pct}%</span></div>
                  <div className={styles.skBar}><div className={styles.skFill} style={{width:`${s.pct}%`}}/></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
