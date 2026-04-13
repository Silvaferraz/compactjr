import { useEffect, useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled || isOpen ? 'glass shadow-sm py-2 border-0' : 'bg-transparent py-3 border-0'
        }`}
      style={{
        transition: 'all 0.3s ease',
        zIndex: 1030,
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#hero">
          <img className="img-logo" src="/images/logo_nav.png" alt="Logo" />
        </a>

        <button
          className="navbar-toggler border-0 shadow-none text-white"
          type="button"
          onClick={handleToggle}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto gap-lg-2">
            {[
              ['Início', '#hero'],
              ['Serviços', '#services'],
              ['Portfólio', '#portfolio'],
              ['Processo', '#process'],
              ['Equipe', '#team'],
              ['Contato', '#contact'],
            ].map(([label, href]) => (
              <li className="nav-item" key={label}>
                <a
                  className="nav-link text-white-50 fw-medium navlink-text"
                  href={href}
                  onClick={handleNavClick}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar