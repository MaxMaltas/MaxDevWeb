import { useEffect, useRef } from "react"

export function useScrollFade(threshold = 0.1) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold }
    )
    el.querySelectorAll(".fade-up").forEach(t => obs.observe(t))
    return () => obs.disconnect()
  }, [threshold])
  return ref
}
