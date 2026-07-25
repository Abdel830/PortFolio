import { useEffect, useState, useRef } from 'react'
import { navLinks, profile } from '../data/portfolio'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = navLinks.map((l) => l.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#accueil" className="header__logo" onClick={() => handleNavClick('accueil')}>
          <span className="header__logo-mark">AO</span>
          <span className="header__logo-text">
            {profile.firstName}
            <strong>{profile.lastName}</strong>
          </span>
        </a>

        <nav ref={navRef} className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`header__nav-btn ${activeSection === link.id ? 'header__nav-btn--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
              {activeSection === link.id && <span className="header__nav-indicator" />}
            </button>
          ))}
          <a href={profile.cvUrl} className="header__cv-btn" download>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Télécharger CV
          </a>
        </nav>

        <button
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
