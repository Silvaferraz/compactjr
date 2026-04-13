import { useEffect } from 'react'
import { gsap } from 'gsap'
import LogoPlaceholder from './LogoPlaceholder'
import TypingEffect from './TypingEffect'
import '../styles/Hero.css'
function Hero() {
  useEffect(() => {
    gsap.fromTo(
      '.hero-copy',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo(
      '.hero-panel',
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container pt-5 mb-5 pb-5">
        <div className="row align-items-center gy-5">
          <div className="col-lg-4 hero-panel d-flex justify-content-center">
            <LogoPlaceholder />
          </div>

          <div className="col-lg-8 hero-copy px-3">
            <h1 className="display-1 fw-bold lh-1 mb-4">
              Transformando ideias em soluções digitais de impacto
            </h1>

            <TypingEffect />

            <div className="inline-hero mt-4 d-flex gap-3">
              <a href="#services" className="servicos-btn">
                Serviços
              </a>
              <a href="#portfolio" className="portolio-btn">
                Portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero