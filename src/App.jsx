import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import ContactCTA from './components/ContactCTA'
import Team from './components/Team'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal')

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <ContactCTA />
      <Footer />
      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/55996618123"
        target="_blank"
        rel="noreferrer"
        className="wpp-float"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="24" height="24" fill="#fff">
          <path d="M16.004 0C7.176 0 .002 7.174.002 16.002c0 2.822.736 5.578 2.136 8.004L0 32l8.188-2.1A15.94 15.94 0 0 0 16.004 32C24.832 32 32 24.826 32 16.002 32 7.174 24.832 0 16.004 0Zm0 29.2a13.16 13.16 0 0 1-7.1-2.072l-.51-.302-4.86 1.246 1.296-4.734-.332-.528A13.14 13.14 0 0 1 2.8 16.002c0-7.286 5.918-13.2 13.204-13.2 7.282 0 13.196 5.914 13.196 13.2 0 7.29-5.914 13.198-13.196 13.198Zm7.236-9.878c-.396-.198-2.348-1.158-2.712-1.29-.364-.134-.63-.198-.894.198-.266.396-1.03 1.29-1.262 1.556-.232.264-.466.298-.862.1-.396-.198-1.674-.618-3.19-1.968-1.178-1.05-1.974-2.348-2.206-2.744-.232-.396-.024-.61.174-.808.178-.178.396-.462.594-.694.198-.232.264-.396.396-.66.134-.264.068-.496-.032-.694-.1-.198-.894-2.156-1.226-2.952-.322-.774-.65-.67-.894-.682l-.762-.014a1.46 1.46 0 0 0-1.06.496c-.364.396-1.39 1.358-1.39 3.312 0 1.954 1.424 3.842 1.622 4.108.198.264 2.8 4.274 6.786 5.992.948.41 1.688.654 2.266.838.952.302 1.818.26 2.502.158.764-.114 2.348-.96 2.68-1.886.33-.926.33-1.72.23-1.886-.098-.166-.362-.264-.758-.462Z" />
        </svg>
      </a>
    </div>
  )
}

export default App