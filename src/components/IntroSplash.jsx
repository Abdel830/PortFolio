import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'
import './IntroSplash.css'

const TIMING = {
  nameIn: 900,
  hold: 700,
  nameOut: 600,
  curtain: 900,
}

export default function IntroSplash({ onComplete }) {
  const [phase, setPhase] = useState('idle') // idle | visible | fading | exiting | done

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
      <div
        className={`intro__content ${
          phase === 'visible' ? 'intro__content--in' : ''
        } ${phase === 'fading' || phase === 'exiting' ? 'intro__content--out' : ''}`}
      >
        <h1 className="intro__name">{fullName}</h1>
        <p className="intro__tagline">Portfolio Digital</p>
      </div>
    </div>
  )
}
