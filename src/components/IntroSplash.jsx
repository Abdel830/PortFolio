import { useEffect, useState, useMemo } from 'react'
import { profile } from '../data/portfolio'
import './IntroSplash.css'

const TIMING = {
  nameIn: 900,
  hold: 700,
  nameOut: 600,
  curtain: 900,
}

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState('idle')

  const particles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 1.5,
    }))
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      onComplete(true)
      return
    }

    document.body.classList.add('intro-active')

    const timers = []

    timers.push(setTimeout(() => setPhase('visible'), 80))
    timers.push(setTimeout(() => setPhase('fading'), TIMING.nameIn + TIMING.hold))
    timers.push(
      setTimeout(() => setPhase('exiting'), TIMING.nameIn + TIMING.hold + TIMING.nameOut),
    )
    timers.push(
      setTimeout(() => {
        setPhase('done')
        document.body.classList.remove('intro-active')
        onComplete(true)
      }, TIMING.nameIn + TIMING.hold + TIMING.nameOut + TIMING.curtain),
    )

    return () => {
      timers.forEach(clearTimeout)
      document.body.classList.remove('intro-active')
    }
  }, [onComplete])

  if (phase === 'done') return null

  const fullName = `${profile.firstName} ${profile.lastName}`.toUpperCase()

  return (
    <div
      className={`intro ${phase === 'exiting' ? 'intro--exit' : ''}`}
      aria-hidden={phase === 'exiting'}
    >
      <div className="intro__particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="intro__particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div
        className={`intro__content ${
          phase === 'visible' ? 'intro__content--in' : ''
        } ${phase === 'fading' || phase === 'exiting' ? 'intro__content--out' : ''}`}
      >
        <div className="intro__line intro__line--top" />
        <h1 className="intro__name">{fullName}</h1>
        <p className="intro__tagline">Portfolio Digital</p>
        <div className="intro__line intro__line--bottom" />
      </div>
    </div>
  )
}
