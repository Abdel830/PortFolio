import { experiences } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Expériences</span>
          <h2 className="section-title">Projets & stages</h2>
          <p className="section-subtitle">
            Des réalisations concrètes en développement web, de la conception à la mise en production.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line" />
          {experiences.map((exp, index) => (
            <article
              key={exp.company}
              className={`timeline__item reveal ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
              data-delay={index * 150}
            >
              <div className="timeline__marker">
                <div className="timeline__marker-dot" />
                <div className="timeline__marker-ring" />
              </div>
              <div className="timeline__card card">
                <div className="timeline__card-shine" />
                <div className="timeline__meta">
                  <span className="timeline__period">{exp.period}</span>
                  <span className="timeline__type">{exp.type}</span>
                </div>
                <h3>{exp.role}</h3>
                <p className="timeline__company">{exp.company}</p>
                <p className="timeline__description">{exp.description}</p>
                {exp.url && (
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="timeline__link">
                    Voir le projet
                  </a>
                )}
                <div className="timeline__card-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
