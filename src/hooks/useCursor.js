import { useEffect } from "react"

export function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor")
    const ring   = document.getElementById("cursor-ring")
    if (!cursor || !ring) return
    let rafId, rx = 0, ry = 0, mx = 0, my = 0
    const onMove = e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx+"px"; cursor.style.top = my+"px" }
    const loop   = () => { rx += (mx-rx)*.12; ry += (my-ry)*.12; ring.style.left = rx+"px"; ring.style.top = ry+"px"; rafId = requestAnimationFrame(loop) }
    document.addEventListener("mousemove", onMove)
    rafId = requestAnimationFrame(loop)
    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafId) }
  }, [])
}
