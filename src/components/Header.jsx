import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
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

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)}>
              {link.label}
            </button>
          ))}
          <a href={profile.cvUrl} className="header__cv-btn" download>
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
