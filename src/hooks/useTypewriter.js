import { useState, useEffect } from "react"

export function useTypewriter(words = [], typeMs = 95, deleteMs = 55, pauseMs = 1800) {
  const [display, setDisplay] = useState("")
  useEffect(() => {
    if (!words.length) return
    let wi = 0, ci = 0, del = false, tid
    const tick = () => {
      const w = words[wi]
      if (!del) { ci++; setDisplay(w.slice(0,ci)); if (ci===w.length) { del=true; tid=setTimeout(tick,pauseMs); return } }
      else { ci--; setDisplay(w.slice(0,ci)); if (ci===0) { del=false; wi=(wi+1)%words.length } }
      tid = setTimeout(tick, del ? deleteMs : typeMs)
    }
    tid = setTimeout(tick, typeMs)
    return () => clearTimeout(tid)
  }, [words, typeMs, deleteMs, pauseMs])
  return display
}
