import { useParams, Link } from "react-router-dom"
import { getPostBySlug } from "@/data/posts"
import styles from "./BlogPost.module.css"

const GRADS = {
  cyber:"linear-gradient(135deg,#0a1018,#0e1620,rgba(0,180,216,.12))",
  devops:"linear-gradient(135deg,#0a1410,#0e1f18,rgba(0,204,122,.12))",
  ai:"linear-gradient(135deg,#100a1a,#160f22,rgba(139,92,246,.12))",
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  if (!post) return <div className={styles.notFound}><h1>Post no encontrado</h1><Link to="/blog" className={styles.back}>← Volver al blog</Link></div>

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{background:GRADS[post.gradient]}}>
        <div className={styles.heroInner}>
          <Link to="/blog" className={styles.back}>← Volver al blog</Link>
          <p className={styles.meta}><span className={styles.cat}>{post.category}</span><span>·</span><span>{post.readTime}</span><span>·</span><span>{post.date}</span></p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.excerpt}>{post.excerpt}</p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.placeholder}>✍️ Contenido del artículo — añade aquí el markdown o el componente de contenido.</p>
        </div>
      </div>
    </div>
  )
}
