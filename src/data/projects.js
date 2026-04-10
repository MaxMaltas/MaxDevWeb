export const projects = [
  // ─── PROYECTOS DESTACADOS ───────────────────────────────────────────────────
  {
    id: "ft-transcendence", slug: "ft-transcendence",
    title: "FT_TRANSCENDENCE", category: "Full Stack · Web",
    description: "Aplicación web full-stack de Pong multijugador en tiempo real con autenticación OAuth, JWT y 2FA, microservicios, Docker y módulos de seguridad avanzados.",
    tags: ["TypeScript", "OAuth", "JWT", "Docker", "WebSocket"],
    gradient: "devops", accent: "neon", size: "large", featured: true, year: 2025,
    github: "https://github.com/MaxMaltas/testing",
  },
  {
    id: "auto-generate-video-clip", slug: "auto-generate-video-clip",
    title: "AUTO-GENERATE VIDEO CLIP", category: "Automatización · Python",
    description: "Herramienta para la automatización de clips audiovisuales a partir de imágenes y una pauta editable. Permite subir fotos, definir una pauta y generar clips listos para emisión.",
    tags: ["Python", "Automatización", "FFmpeg", "Video"],
    gradient: "ai", accent: "purple", size: "large", featured: true, year: 2026,
    github: "https://github.com/MaxMaltas/Auto-Generate-Video-Clip",
  },
  {
    id: "inception", slug: "inception",
    title: "INCEPTION", category: "DevOps · Docker",
    description: "Infraestructura de servicios web dockerizada desde cero: Nginx, WordPress y MariaDB con certificados TLS, red privada y volúmenes persistentes sin imágenes preconfiguradas.",
    tags: ["Docker", "Nginx", "WordPress", "MariaDB", "TLS"],
    gradient: "cloud", accent: "gold", size: "small", featured: true, year: 2025,
    github: "https://github.com/MaxMaltas/Inception",
  },
  {
    id: "discovery-cybersecurity", slug: "discovery-cybersecurity",
    title: "CYBERSECURITY PISCINE", category: "Cybersecurity",
    description: "Writeups y soluciones de la Piscine de Ciberseguridad de 42: análisis de vulnerabilidades, CTFs, técnicas de pentesting y análisis forense.",
    tags: ["CTF", "Writeups", "Pentesting", "Forense"],
    gradient: "cyber", accent: "cyan", size: "small", featured: true, year: 2025,
    github: "https://github.com/MaxMaltas/Discovery-Piscine---Cybersecurity",
  },

  // ─── SISTEMAS EN C ────────────────────────────────────────────────────────
  {
    id: "philo", slug: "philo",
    title: "PHILO", category: "Sistemas · C",
    description: "Simulación del problema de los filósofos comensales: concurrencia con hilos POSIX, mutex y semáforos para evitar deadlocks y race conditions.",
    tags: ["C", "Threads", "Mutex", "Concurrencia"],
    gradient: "devops", accent: "neon", size: "small", featured: false, year: 2024,
    github: "https://github.com/MaxMaltas/philo",
  },
  {
    id: "minishell", slug: "minishell",
    title: "MINISHELL", category: "Sistemas · C",
    description: "Implementación de una shell UNIX en C: parsing de comandos, pipes, redirecciones, variables de entorno, señales y builtins propios (cd, echo, env, export...).",
    tags: ["C", "Bash", "Shell", "Unix"],
    gradient: "cyber", accent: "cyan", size: "small", featured: false, year: 2024,
    github: "https://github.com/MaxMaltas/practice_Minishell",
  },
  {
    id: "pipex", slug: "pipex",
    title: "PIPEX", category: "Sistemas · C",
    description: "Reimplementación de pipes UNIX en C: manejo de procesos hijos con fork/exec, redirección de file descriptors y encadenamiento de comandos como una shell.",
    tags: ["C", "Unix", "Pipes", "Procesos"],
    gradient: "devops", accent: "gold", size: "small", featured: false, year: 2024,
    github: "https://github.com/MaxMaltas/PIPEX",
  },

  // ─── C++ MODULES (42 SCHOOL) ──────────────────────────────────────────────
  {
    id: "cpp09", slug: "cpp09",
    title: "CPP09", category: "C++ · 42 School",
    description: "STL avanzado: BitcoinExchangeRate con map, RPN calculator con stack y PmergeMe con el algoritmo de Ford-Johnson para ordenación eficiente.",
    tags: ["C++", "STL", "Algoritmos", "Ford-Johnson"],
    gradient: "cloud", accent: "gold", size: "small", featured: false, year: 2025,
    github: "https://github.com/MaxMaltas/cpp09",
  },
  {
    id: "cpp08", slug: "cpp08",
    title: "CPP08", category: "C++ · 42 School",
    description: "Contenedores y algoritmos STL: implementación de Span, Mutated Abomination y EasyFind usando iteradores, templates y rangos genéricos.",
    tags: ["C++", "STL", "Contenedores", "Templates"],
    gradient: "cloud", accent: "neon", size: "small", featured: false, year: 2025,
    github: "https://github.com/MaxMaltas/cpp08",
  },
  {
    id: "cpp07", slug: "cpp07",
    title: "CPP07", category: "C++ · 42 School",
    description: "Templates en C++: funciones genéricas, iteración con iter y clase Array con especialización de plantillas e instanciación explícita.",
    tags: ["C++", "Templates", "Genéricos", "OOP"],
    gradient: "ai", accent: "purple", size: "small", featured: false, year: 2025,
    github: "https://github.com/MaxMaltas/cpp07",
  },
  {
    id: "cpp06", slug: "cpp06",
    title: "CPP06", category: "C++ · 42 School",
    description: "Casting en C++: static_cast, dynamic_cast, reinterpret_cast y const_cast con conversores de tipos escalares y detección en tiempo de ejecución.",
    tags: ["C++", "Casting", "Tipos", "RTTI"],
    gradient: "cloud", accent: "cyan", size: "small", featured: false, year: 2025,
    github: "https://github.com/MaxMaltas/cpp06",
  },
  {
    id: "cpp05", slug: "cpp05",
    title: "CPP05", category: "C++ · 42 School",
    description: "Excepciones y herencia en C++: burocracia con jerarquía de clases, formularios con polimorfismo y manejo de errores robusto con try/catch.",
    tags: ["C++", "Excepciones", "Herencia", "OOP"],
    gradient: "ai", accent: "cyan", size: "small", featured: false, year: 2025,
    github: "https://github.com/MaxMaltas/cpp05",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getAllProjects       = () => projects
export const getProjectBySlug    = (slug) => projects.find(p => p.slug === slug)
