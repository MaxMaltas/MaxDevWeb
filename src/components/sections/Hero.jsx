import { useScrollFade } from "@/hooks/useScrollFade"
import { useTypewriter } from "@/hooks/useTypewriter"
import styles from "./Hero.module.css"

const WORDS = ["AI Systems","LLMOps","Threat Intel","Zero Trust","MLOps","GitOps"]
const TAGS  = ["Kubernetes","Zero Trust","MLOps","Terraform","Threat Intel"]

export default function Hero() {
  const ref     = useScrollFade()
  const current = useTypewriter(WORDS)
  return (
    <section id="hero" ref={ref} className={`${styles.hero} scanlines`}>
      <div className={styles.glow1}/><div className={styles.glow2}/>
      <p className={`${styles.eyebrow} fade-up`}>Sistema activo &middot; v2.0.26</p>
      <h1 className={`${styles.title} fade-up fade-up-d1`}>
        <span className={styles.glitch} data-text="MAX">MAX</span>
        <span className={styles.accent}>MALTAS.</span>
      </h1>
      <p className={`${styles.subtitle} fade-up fade-up-d2`}>
        DevOps Engineer &middot; Cybersecurity &middot; <span className={styles.tw}>{current}</span>
      </p>
      <div className={`${styles.tags} fade-up fade-up-d3`}>
        {TAGS.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
      <div className={styles.hint}><span className={styles.hintLine}/>SCROLL</div>
    </section>
  )
}
