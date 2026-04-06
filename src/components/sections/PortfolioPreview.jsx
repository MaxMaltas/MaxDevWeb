import { Link } from "react-router-dom"
import { getFeaturedProjects } from "@/data/projects"
import { useScrollFade } from "@/hooks/useScrollFade"
import ProjectCard from "./ProjectCard"
import styles from "./PortfolioPreview.module.css"

export default function PortfolioPreview() {
  const ref = useScrollFade()
  const projects = getFeaturedProjects()
  return (
    <section id="portfolio" ref={ref} className={styles.section}>
      <div className="sec-inner">
        <p className={`${styles.label} fade-up`}>[01.00] — PORTFOLIO</p>
        <h2 className="fade-up fade-up-d1">PROYECTOS<br/>SELECCIONADOS</h2>
        <p className="sec-intro fade-up fade-up-d2">Casos de estudio en infraestructura crítica, seguridad y sistemas de IA.</p>
        <div className={styles.grid}>
          {projects.map((p,i) => <ProjectCard key={p.id} project={p} className={`fade-up fade-up-d${(i%3)+2}`}/>)}
        </div>
        <div className={`${styles.all} fade-up fade-up-d3`}>
          <Link to="/portfolio" className={styles.allLink}>Ver todos los proyectos →</Link>
        </div>
      </div>
    </section>
  )
}
