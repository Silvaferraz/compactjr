import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function LogoPlaceholder() {
  const logoContainerRef = useRef(null)

  useEffect(() => {
    const logoContainer = logoContainerRef.current

    if (!logoContainer) return

    gsap.to(logoContainer, {
      y: -8,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    return () => {
      // Cleanup: mata a animação quando o componente desmonta
      gsap.killTweensOf(logoContainer)
    }
  }, [])

  return (
    <div className="hero-logo-wrap">
      <div ref={logoContainerRef} className="logo-container">
        <img
          src="/images/logo.png"
          alt="Logo da CompactJr"
          className="compact-logo-hero"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default LogoPlaceholder