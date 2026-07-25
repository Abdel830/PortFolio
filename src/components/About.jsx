import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'
import './About.css'

function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return { count, ref }
}

export default function About() {
  const years = useCounter(2, 1500)
  const projects = useCounter(3, 1500)

  const highlights = [
    { label: 'Spécialité', value: 'Développement Web Full-Stack', icon: '⚡' },
    { label: 'Localisation', value: profile.location, icon: '📍' },
    { label: 'Formation', value: 'ISTA - OFPPT, Développement Digital', icon: '🎓' },
    { label: 'Approche', value: 'Autonomie, rigueur et travail en équipe', icon: '🤝' },
  ]

  return (
    <section id="apropos" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">À propos</span>
          <h2 className="section-title">Qui suis-je ?</h2>
          <p className="section-subtitle">
            Passionné par le développement web et toujours en quête de nouveaux défis techniques.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__card card reveal-left">
            <div className="about__card-header">
              <div className="about__avatar">
                <img src={profile.imageUrl} alt={profile.firstName} />
              </div>
              <div>
                <h3>Profil</h3>
                <p className="about__role">{profile.title}</p>
              </div>
            </div>
            <p className="about__bio">{profile.bio}</p>
            <div className="about__counters">
              <div className="about__counter" ref={years.ref}>
                <strong>{years.count}+</strong>
                <span>Années d'expérience</span>
              </div>
              <div className="about__counter" ref={projects.ref}>
                <strong>{projects.count}+</strong>
                <span>Projets réalisés</span>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="about__highlight card reveal-right"
                data-delay={i * 100}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
