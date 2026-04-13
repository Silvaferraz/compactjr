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
    </div>
  )
}

export default App