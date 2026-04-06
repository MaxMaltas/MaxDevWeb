import { Link } from "react-router-dom"
import { getRecentPosts } from "@/data/posts"
import { useScrollFade } from "@/hooks/useScrollFade"
import styles from "./BlogPreview.module.css"

const GRADS = {
  cyber:  "linear-gradient(135deg,#0a1018,#0e1620,rgba(0,180,216,.12))",
  devops: "linear-gradient(135deg,#0a1410,#0e1f18,rgba(0,204,122,.12))",
  ai:     "linear-gradient(135deg,#100a1a,#160f22,rgba(139,92,246,.12))",
}

export default function BlogPreview() {
  const ref = useScrollFade()
  const [featured, ...rest] = getRecentPosts(3)
  return (
    <section id="blog" ref={ref} className={styles.section}>
      <div className="sec-inner">
        <p className={`${styles.label} fade-up`}>[03.00] — BLOG</p>
        <h2 className="fade-up fade-up-d1">ÚLTIMOS<br/>ARTÍCULOS</h2>
        <p className="sec-intro fade-up fade-up-d2">Perspectivas técnicas sobre DevOps, seguridad e IA en producción.</p>
        <div className={styles.grid}>
          <Link to={`/blog/${featured.slug}`} className={`${styles.dark} fade-up fade-up-d2`}>
            <div className={styles.img} style={{background:GRADS[featured.gradient]}}/>
            <div className={styles.body}>
              <div className={styles.meta}><span className={styles.cat}>{featured.category}</span><span>·</span><span>{featured.readTime}</span><span>·</span><span>{featured.date}</span></div>
              <h3 className={styles.titleDark}>{featured.title}</h3>
              <p className={styles.excerptDark}>{featured.excerpt}</p>
              <span className={styles.readDark}>Leer artículo →</span>
            </div>
          </Link>
          <div className={styles.secondary}>
            {rest.map((p,i) => (
              <Link key={p.id} to={`/blog/${p.slug}`} className={`${styles.light} fade-up fade-up-d${i+3}`}>
                <div className={styles.imgSm} style={{background:GRADS[p.gradient]}}/>
                <div className={styles.bodyLight}>
                  <div className={styles.metaLight}><span className={styles.catLight}>{p.category}</span><span>·</span><span>{p.readTime}</span></div>
                  <h3 className={styles.titleLight}>{p.title}</h3>
                  <p className={styles.excerptLight}>{p.excerpt}</p>
                  <span className={styles.readLight}>Leer artículo →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className={`${styles.all} fade-up fade-up-d4`}><Link to="/blog" className={styles.allLink}>Ver todos los artículos →</Link></div>
      </div>
    </section>
  )
}
