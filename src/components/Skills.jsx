import { skills } from '../data/portfolio'
import './Skills.css'

const skillIcons = {
  'Front-End': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  'Back-End': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  'Bases de données': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'Langues': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
}

export default function Skills() {
  return (
    <section id="competences" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Compétences</span>
          <h2 className="section-title">Mes technologies & outils</h2>
          <p className="section-subtitle">
            Un stack moderne pour concevoir des applications web performantes et maintenables.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <article
              key={group.category}
              className="skills__card card reveal"
              data-delay={i * 120}
            >
              <div className="skills__card-header">
                <div className="skills__card-icon">
                  {skillIcons[group.category]}
                </div>
                <h3>{group.category}</h3>
              </div>
              <div className="skills__list">
                {group.items.map((item, j) => (
                  <div key={item} className="skills__item" style={{ animationDelay: `${(i * group.items.length + j) * 60}ms` }}>
                    <span className="skills__item-dot" />
                    <span className="skills__item-text">{item}</span>
                  </div>
                ))}
              </div>
              <div className="skills__card-glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
