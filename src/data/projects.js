export const projects = [
  {
    id: "pipeline-zero-downtime", slug: "pipeline-zero-downtime",
    title: "PIPELINE ZERO-DOWNTIME", category: "DevOps · CI/CD",
    description: "Arquitectura GitOps multi-cluster con rollback automático y observabilidad completa sobre 40 microservicios en producción.",
    tags: ["Kubernetes","Argo CD","Prometheus","Grafana"],
    gradient: "devops", accent: "neon", size: "large", featured: true, year: 2025,
  },
  {
    id: "zero-trust-framework", slug: "zero-trust-framework",
    title: "ZERO TRUST FRAMEWORK", category: "Cybersecurity",
    description: "Implementación de arquitectura Zero Trust para infraestructura crítica en el sector financiero.",
    tags: ["SIEM","OWASP","SOC2","Zero Trust"],
    gradient: "cyber", accent: "cyan", size: "small", featured: true, year: 2025,
  },
  {
    id: "ml-inference-platform", slug: "ml-inference-platform",
    title: "ML INFERENCE PLATFORM", category: "AI · MLOps",
    description: "Plataforma de inferencia distribuida con auto-scaling, A/B testing nativo y monitorización de drift.",
    tags: ["Ray","MLflow","vLLM","Kubernetes"],
    gradient: "ai", accent: "purple", size: "small", featured: true, year: 2024,
  },
  {
    id: "multi-cloud-terraform", slug: "multi-cloud-terraform",
    title: "MULTI-CLOUD TERRAFORM", category: "Cloud · IaC",
    description: "Infraestructura como código reproducible y auditada para entornos AWS, GCP y Azure con Atlantis.",
    tags: ["Terraform","AWS","GCP","Azure","Atlantis"],
    gradient: "cloud", accent: "gold", size: "large", featured: true, year: 2024,
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectBySlug    = (slug) => projects.find(p => p.slug === slug)
