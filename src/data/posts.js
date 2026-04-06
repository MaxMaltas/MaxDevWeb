export const posts = [
  {
    id: "zero-trust-legacy", slug: "zero-trust-legacy",
    title: "CÓMO IMPLEMENTAR ZERO TRUST EN ENTORNOS LEGACY SIN MORIR EN EL INTENTO",
    excerpt: "Un roadmap técnico realista para migrar infraestructuras heredadas a confianza cero sin interrumpir operaciones críticas.",
    category: "Cybersecurity", readTime: "12 min", date: "Mar 2026",
    gradient: "cyber", featured: true,
    content: "Contenido completo del artículo aquí...",
  },
  {
    id: "gitops-escala", slug: "gitops-escala",
    title: "GITOPS A ESCALA: 18 MESES CON ARGO CD",
    excerpt: "Errores comunes, patrones que funcionan y cómo estructurar repositorios para equipos grandes.",
    category: "DevOps", readTime: "8 min", date: "Feb 2026",
    gradient: "devops", featured: false,
    content: "Contenido completo del artículo aquí...",
  },
  {
    id: "llmops-produccion", slug: "llmops-produccion",
    title: "LLMOPS EN PRODUCCIÓN: MÁS ALLÁ DEL PROTOTIPO",
    excerpt: "Observabilidad, cost control y evaluación continua para LLMs con tráfico real a escala.",
    category: "AI · MLOps", readTime: "10 min", date: "Ene 2026",
    gradient: "ai", featured: false,
    content: "Contenido completo del artículo aquí...",
  },
]

export const getFeaturedPost = () => posts.find(p => p.featured)
export const getRecentPosts  = (n = 3) => posts.slice(0, n)
export const getPostBySlug   = (slug) => posts.find(p => p.slug === slug)
