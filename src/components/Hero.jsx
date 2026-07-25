import { useEffect, useState, useRef } from 'react'
import { profile } from '../data/portfolio'
import './Hero.css'

const TYPING_TEXTS = [
  'Développeur Full-Stack',
  'Créateur d\'expériences web',
  'Passionné de code',
  'Résolveur de problèmes',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentText = TYPING_TEXTS[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setTypedText(currentText.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentText.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="accueil" className="hero section">
      <div className="hero__orbs">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content reveal-left">
          <p className="hero__badge">
            <span className="hero__badge-dot" />
            Disponible pour de nouvelles opportunités
          </p>
          <h1 className="hero__title">
            Bonjour, je suis{' '}
            <span className="gradient-text">
              {profile.firstName} {profile.lastName}
            </span>
          </h1>
          <p className="hero__subtitle">
            <span className="hero__typing">{typedText}</span>
            <span className={`hero__cursor ${showCursor ? 'hero__cursor--visible' : ''}`}>|</span>
          </p>
          <p className="hero__location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {profile.location}
          </p>
          <p className="hero__description">{profile.bio}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Me contacter
            </a>
            <a href={profile.cvUrl} className="btn btn-secondary" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </a>
          </div>

          <div className="hero__links">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hero__link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hero__link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="hero__link-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>
        </div>

        <div className="hero__visual reveal-right">
          <div className="hero__image-wrap">
            <div className="hero__image-ring" />
            <div className="hero__image-glow" />
            <div className="hero__image-inner">
              <img src={profile.imageUrl} alt={`${profile.firstName} ${profile.lastName}`} />
            </div>
            <div className="hero__image-badge">
              <span>Développeur</span>
              <strong>Full-Stack</strong>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat card reveal" data-delay="100">
              <div className="hero__stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
              </div>
              <strong>3+</strong>
              <span>Projets réalisés</span>
            </div>
            <div className="hero__stat card reveal" data-delay="200">
              <div className="hero__stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <strong>Full-Stack</strong>
              <span>Front & Back-End</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
