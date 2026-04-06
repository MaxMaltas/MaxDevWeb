import { Link } from "react-router-dom"
import { posts } from "@/data/posts"
import { useScrollFade } from "@/hooks/useScrollFade"
import styles from "./Blog.module.css"

const GRADS = {
  cyber:"linear-gradient(135deg,#0a1018,#0e1620,rgba(0,180,216,.12))",
  devops:"linear-gradient(135deg,#0a1410,#0e1f18,rgba(0,204,122,.12))",
  ai:"linear-gradient(135deg,#100a1a,#160f22,rgba(139,92,246,.12))",
}

export default function Blog() {
  const ref = useScrollFade()
  return (
    <div ref={ref} id="top" className={styles.page}>
      <div className="sec-inner">
        <p className={`${styles.label} fade-up`}>[03.00] — BLOG</p>
        <h1 className={`${styles.title} fade-up fade-up-d1`}>ARTÍCULOS<br/>TÉCNICOS</h1>
        <p className="sec-intro fade-up fade-up-d2">Perspectivas sobre DevOps, Cybersecurity e IA en entornos de producción reales.</p>
        <div className={styles.grid}>
          {posts.map((p,i)=>(
            <Link key={p.id} to={`/blog/${p.slug}`} className={`${styles.card} fade-up fade-up-d${(i%3)+2}`}>
              <div className={styles.img} style={{background:GRADS[p.gradient]}}/>
              <div className={styles.body}>
                <div className={styles.meta}><span className={styles.cat}>{p.category}</span><span>·</span><span>{p.readTime}</span><span>·</span><span>{p.date}</span></div>
                <h2 className={styles.cardTitle}>{p.title}</h2>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <span className={styles.read}>Leer artículo →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
