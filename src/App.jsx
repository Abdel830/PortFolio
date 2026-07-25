import { useEffect, useRef, useState, useMemo } from 'react'
import IntroSplash from './components/IntroSplash'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Marquee from './components/Marquee'

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, Number(delay))
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return progress
}

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 20,
      opacity: Math.random() * 0.3 + 0.1,
      color: ['var(--accent)', '#6366f1', '#a855f7'][Math.floor(Math.random() * 3)],
    }))
  }, [])

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const scrollProgress = useScrollProgress()

  useRevealOnScroll()

  return (
    <>
      <CustomCursor />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
      <Particles />
      {!introDone && <IntroSplash onComplete={setIntroDone} />}
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <div className="glow-divider" />
        <Skills />
        <div className="glow-divider" />
        <Experience />
        <div className="glow-divider" />
        <Education />
        <div className="glow-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
