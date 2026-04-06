import { getFeaturedProjects } from "@/data/projects"
import { useScrollFade } from "@/hooks/useScrollFade"
import ProjectCard from "@/components/sections/ProjectCard"
import styles from "./Portfolio.module.css"

export default function Portfolio() {
  const ref = useScrollFade()
  const projects = getFeaturedProjects()
  return (
    <div ref={ref} id="top" className={styles.page}>
      <div className="sec-inner">
        <p className={`${styles.label} fade-up`}>[01.00] — PORTFOLIO</p>
        <h1 className={`${styles.title} fade-up fade-up-d1`}>TODOS LOS<br/>PROYECTOS</h1>
        <p className="sec-intro fade-up fade-up-d2">Infraestructura, seguridad e IA. Cada proyecto refleja una decisión técnica medible.</p>
        <div className={styles.grid}>
          {projects.map((p,i)=><ProjectCard key={p.id} project={p} className={`fade-up fade-up-d${(i%3)+2}`}/>)}
        </div>
      </div>
    </div>
  )
}
