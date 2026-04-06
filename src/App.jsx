import { Routes, Route } from "react-router-dom"
import Sidebar     from "@/components/layout/Sidebar"
import Footer      from "@/components/layout/Footer"
import Cursor      from "@/components/ui/Cursor"
import ScrollToTop from "@/components/ui/ScrollToTop"
import Home        from "@/pages/Home"
import Portfolio   from "@/pages/Portfolio"
import Servicios   from "@/pages/Servicios"
import Blog        from "@/pages/Blog"
import BlogPost    from "@/pages/BlogPost"
import NotFound    from "@/pages/NotFound"
import styles      from "./App.module.css"

export default function App() {
  return (
    <>
      <Cursor />
      <Sidebar />
      <ScrollToTop />
      <div className={styles.layout}>
        <main className={styles.main}>
          <Routes>
            <Route path="/"           element={<Home />} />
            <Route path="/portfolio"  element={<Portfolio />} />
            <Route path="/servicios"  element={<Servicios />} />
            <Route path="/blog"       element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*"           element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}
