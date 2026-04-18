// src/components/sections/Catalogo.jsx
import { useState } from "react"
import { useScrollFade } from "@/hooks/useScrollFade"
import { catalogoServicios, retainerPlanes, packArranque } from "@/data/catalogo"
import styles from "./Catalogo.module.css"

const ACCENT_STROKE = { neon: "#00CC7A", cyan: "#00B4D8", purple: "#8B5CF6" }
const ACCENT_VAR    = { neon: "var(--neon)", cyan: "var(--cyan)", purple: "var(--purple)" }
const TOP_GRAD = {
  neon:   "linear-gradient(90deg,var(--neon),var(--cyan))",
  cyan:   "linear-gradient(90deg,var(--cyan),var(--neon))",
  purple: "linear-gradient(90deg,var(--purple),var(--cyan))",
}

function IconServicio({ accent }) {
  const s = ACCENT_STROKE[accent]
  if (accent === "neon") return (
    <svg viewBox="0 0 22 22" fill="none" stroke={s} strokeWidth="1.5">
      <rect x="2" y="4" width="18" height="14" rx="2"/>
      <path d="M6 8h4M6 12h6M6 16h3"/>
      <circle cx="16" cy="14" r="2.5"/>
      <path d="M17.5 15.5 L20 18"/>
    </svg>
  )
  if (accent === "cyan") return (
    <svg viewBox="0 0 22 22" fill="none" stroke={s} strokeWidth="1.5">
      <path d="M11 2 L19 6 L19 13 Q19 18 11 21 Q3 18 3 13 L3 6 Z"/>
      <path d="M8 11l2 2 4-4"/>
    </svg>
  )
  return (
    <svg viewBox="0 0 22 22" fill="none" stroke={s} strokeWidth="1.5">
      <circle cx="11" cy="11" r="9"/>
      <path d="M11 6v5l3 3"/>
      <path d="M6 18l2-2M16 18l-2-2"/>
    </svg>
  )
}

function CheckIcon({ color }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{flexShrink:0,marginTop:"2px"}}>
      <path d="M2 6.5l3 3 6-6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{flexShrink:0,marginTop:"2px"}}>
      <path d="M3 3l7 7M10 3l-7 7" stroke="#5a5a70" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  )
}

function ServiceCard({ s, index }) {
  const [open, setOpen] = useState(false)
  const accentColor = ACCENT_VAR[s.accent]
  return (
    <article
      className={`${styles.card} fade-up fade-up-d${index + 2}`}
      style={{ "--tg": TOP_GRAD[s.accent], "--accent": accentColor }}
    >
      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={styles.idx}>{s.index}</span>
          <span className={styles.tipo}>{s.tipo}</span>
        </div>
        <div className={styles.iconWrap}>
          <IconServicio accent={s.accent} />
        </div>
      </div>

      <h3 className={styles.cardTitle}>{s.titulo}</h3>
      <p className={styles.cardSub}>{s.subtitulo}</p>

      <div className={styles.priceRow}>
        <span className={styles.price}>{s.precio}</span>
        <span className={styles.priceNote}>{s.precioNota}</span>
      </div>

      <div className={styles.plazoRow}>
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle cx="5.5" cy="5.5" r="4.5" stroke={ACCENT_STROKE[s.accent]} strokeWidth="1"/>
          <path d="M5.5 3v2.5l1.5 1.5" stroke={ACCENT_STROKE[s.accent]} strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span>Plazo estimado: {s.plazo}</span>
      </div>

      <div className={styles.stack}>
        {s.stack.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      <button
        className={styles.toggleBtn}
        onClick={() => setOpen(v => !v)}
        style={{ color: accentColor }}
      >
        {open ? "Ocultar alcance ↑" : "Ver alcance detallado →"}
      </button>

      {open && (
        <div className={styles.scope}>
          <div className={styles.scopeCol}>
            <p className={styles.scopeLabel} style={{ color: accentColor }}>// incluye</p>
            {s.incluye.map(item => (
              <div key={item} className={styles.scopeItem}>
                <CheckIcon color={ACCENT_STROKE[s.accent]} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.scopeCol}>
            <p className={styles.scopeLabel} style={{ color: "#5a5a70" }}>// no incluye</p>
            {s.excluye.map(item => (
              <div key={item} className={styles.scopeItem}>
                <CrossIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className={styles.scopeNote}>
            <span style={{ color: accentColor }}>{">"}_</span> {s.scopeNote}
          </div>
        </div>
      )}
    </article>
  )
}

export default function Catalogo() {
  const ref = useScrollFade()
  return (
    <section ref={ref} className={styles.section}>
      <div className="sec-inner">

        {/* — Header — */}
        <p className={`${styles.label} fade-up`}>[02.01] — CATÁLOGO</p>
        <h2 className="fade-up fade-up-d1">SERVICIOS &amp;<br/>PRECIOS.</h2>
        <p className={`sec-intro fade-up fade-up-d2`}>
          Precios cerrados por proyecto, sin sorpresas. Cada servicio incluye documentación y alcance definido antes de empezar.
        </p>

        {/* — Proyectos únicos — */}
        <p className={`${styles.sectionLabel} fade-up`}>Proyectos de entrega única</p>
        <div className={styles.grid}>
          {catalogoServicios.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>

        {/* — Retainer — */}
        <p className={`${styles.sectionLabel} fade-up`} style={{marginTop:"4rem"}}>Mantenimiento mensual</p>
        <p className={`${styles.sectionSub} fade-up fade-up-d1`}>
          Soporte recurrente para empresas sin equipo IT interno. Precio fijo, sin llamadas inesperadas.
        </p>
        <div className={styles.retainerGrid}>
          {retainerPlanes.map((plan, i) => (
            <div
              key={plan.id}
              className={`${styles.retainerCard} ${plan.destacado ? styles.retainerPro : ""} fade-up fade-up-d${i+2}`}
            >
              {plan.destacado && (
                <div className={styles.proBadge}>Recomendado</div>
              )}
              <div className={styles.retainerHeader}>
                <div>
                  <p className={styles.retainerName}>{plan.nombre}</p>
                  <p className={styles.retainerHoras}>{plan.horas}</p>
                </div>
                <div className={styles.retainerPrice}>
                  <span className={styles.retainerPriceMain}>{plan.precio}</span>
                  <span className={styles.retainerPricePer}>{plan.periodo}</span>
                </div>
              </div>
              <div className={styles.retainerItems}>
                {plan.items.map(item => (
                  <div key={item} className={styles.retainerItem}>
                    <CheckIcon color={plan.destacado ? "#00CC7A" : "#00B4D8"} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className={styles.retainerNote}>
                <span style={{color: plan.destacado ? "var(--neon)" : "var(--cyan)"}}>{">"}_</span> Horas extra a 50 €/h. Proyectos nuevos siempre presupuestados aparte.
              </p>
            </div>
          ))}
        </div>

        {/* — Pack — */}
        <div className={`${styles.pack} fade-up`}>
          <div className={styles.packLeft}>
            <p className={styles.packBadge}>Pack entrada</p>
            <h3 className={styles.packTitle}>{packArranque.titulo}</h3>
            <p className={styles.packSub}>{packArranque.subtitulo}</p>
            <div className={styles.packItems}>
              {packArranque.items.map(item => (
                <div key={item.label} className={styles.packItem}>
                  <span className={styles.packItemLabel}>{item.label}</span>
                  <span className={styles.packItemVal}>{item.valor}</span>
                </div>
              ))}
              <div className={`${styles.packItem} ${styles.packItemTotal}`}>
                <span>Total sin pack</span>
                <span className={styles.packStrike}>{packArranque.totalSinPack}</span>
              </div>
            </div>
          </div>
          <div className={styles.packRight}>
            <p className={styles.packSaving}>{packArranque.ahorro}</p>
            <p className={styles.packPrice}>{packArranque.precio}</p>
            <p className={styles.packPriceNote}>{packArranque.precioPost}</p>
            <a href={packArranque.href} className={styles.packCta}>
              // Solicitar pack →
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
