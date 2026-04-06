import Hero             from "@/components/sections/Hero"
import PortfolioPreview from "@/components/sections/PortfolioPreview"
import ServiciosPreview from "@/components/sections/ServiciosPreview"
import BlogPreview      from "@/components/sections/BlogPreview"
import About            from "@/components/sections/About"
import Contacto         from "@/components/sections/Contacto"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="sec-divider"/>
      <PortfolioPreview />
      <div className="sec-divider"/>
      <ServiciosPreview />
      <div className="sec-divider"/>
      <BlogPreview />
      <div className="sec-divider"/>
      <About />
      <div className="sec-divider"/>
      <Contacto />
    </>
  )
}
