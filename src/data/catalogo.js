// src/data/catalogo.js
// Catálogo de servicios freelance — precios por proyecto
// Edita precios, incluye/excluye aquí sin tocar el componente

export const catalogoServicios = [
  {
    id: "servidor-selfhosted",
    index: "[01]",
    accent: "neon",
    tipo: "Proyecto único",
    titulo: "Servidor autoalojado desde cero",
    subtitulo: "VPS o bare-metal · Docker · Nginx · SSL · Backups",
    precio: "600 – 900 €",
    precioNota: "precio cerrado por proyecto",
    plazo: "5–10 días",
    incluye: [
      "Setup del servidor (VPS o bare-metal)",
      "Docker + Compose configurado",
      "Hasta 3 servicios desplegados",
      "Nginx reverse proxy + SSL (Let's Encrypt)",
      "Backups automatizados básicos",
      "Documentación de acceso entregada",
    ],
    excluye: [
      "Coste del VPS o dominio",
      "Más de 3 servicios (+ 80–120 €/servicio)",
      "Migración de datos existentes",
      "Soporte tras entrega",
    ],
    scopeNote: "Cada servicio adicional se presupuesta antes de empezar.",
    stack: ["Docker", "Nginx", "Let's Encrypt", "Bash", "Linux"],
  },
  {
    id: "vpn-acceso-remoto",
    index: "[02]",
    accent: "cyan",
    tipo: "Proyecto único",
    titulo: "Acceso remoto seguro con VPN",
    subtitulo: "WireGuard o Tailscale · hasta 5 usuarios · firewall",
    precio: "300 – 500 €",
    precioNota: "precio cerrado por proyecto",
    plazo: "2–5 días",
    incluye: [
      "Instalación y config. WireGuard o Tailscale",
      "Hasta 5 dispositivos/usuarios configurados",
      "Firewall básico y reglas de acceso",
      "Guía de uso para el equipo (PDF)",
      "1 sesión de revisión post-entrega (30 min)",
    ],
    excluye: [
      "Más de 5 usuarios (+ 30 €/usuario)",
      "Integración con Active Directory / SSO",
      "Hardware de red (routers, switches)",
      "Soporte continuado tras entrega",
    ],
    scopeNote: "Usuarios adicionales al 5.º se facturan a 30 € cada uno.",
    stack: ["WireGuard", "Tailscale", "iptables", "Linux"],
  },
  {
    id: "migracion-selfhosted",
    index: "[03]",
    accent: "purple",
    tipo: "Proyecto único",
    titulo: "Migración cloud → self-hosted",
    subtitulo: "Google Drive → Nextcloud · Dropbox → Seafile · sustitución SaaS",
    precio: "500 – 800 €",
    precioNota: "precio cerrado por proyecto",
    plazo: "5–12 días",
    incluye: [
      "Análisis del servicio a sustituir",
      "Despliegue del equivalente self-hosted",
      "Migración de datos (hasta 100 GB)",
      "Formación básica al equipo (1 sesión)",
      "Validación de funcionamiento",
    ],
    excluye: [
      "Más de 1 servicio por proyecto",
      "Datos >100 GB (+ 50 €/100 GB extra)",
      "Coste del servidor o almacenamiento",
      "Soporte tras 30 días de entrega",
    ],
    scopeNote: "Cada servicio adicional a migrar es un proyecto separado.",
    stack: ["Nextcloud", "Docker", "MariaDB", "Linux", "Cloudflare"],
  },
]

export const retainerPlanes = [
  {
    id: "base",
    nombre: "Plan Base",
    precio: "150 €",
    periodo: "/ mes",
    horas: "2h soporte reactivo",
    destacado: false,
    items: [
      "Actualizaciones de sistema y contenedores",
      "Revisión mensual de logs y alertas",
      "Verificación de backups",
      "Hasta 2h soporte reactivo/mes",
      "Informe mensual de estado",
    ],
  },
  {
    id: "pro",
    nombre: "Plan Pro",
    precio: "300 €",
    periodo: "/ mes",
    horas: "5h soporte reactivo",
    destacado: true,
    items: [
      "Todo lo del Plan Base",
      "Hasta 5h soporte reactivo/mes",
      "Respuesta en menos de 24h laborables",
      "1 mejora de configuración/mes",
      "Videoconferencia mensual de revisión",
    ],
  },
]

export const packArranque = {
  titulo: "Pack Arranque Digital",
  subtitulo: "Servidor + VPN + 3 meses de mantenimiento base",
  precio: "1.100 €",
  precioPost: "+ 150 €/mes desde el mes 4",
  ahorro: "Ahorro 270 €",
  href: "mailto:maltas.max@proton.me?subject=Pack Arranque Digital",
  items: [
    { label: "Servidor autoalojado desde cero", valor: "700 €" },
    { label: "VPN WireGuard para el equipo", valor: "350 €" },
    { label: "3 meses mantenimiento base", valor: "450 €" },
  ],
  totalSinPack: "1.500 €",
}
