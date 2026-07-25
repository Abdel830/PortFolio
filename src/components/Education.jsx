import { education } from '../data/portfolio'
import './Education.css'

export default function Education() {
  return (
    <section id="formation" className="section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Formation</span>
          <h2 className="section-title">Parcours académique</h2>
          <p className="section-subtitle">
            Une formation solide en développement digital et en sciences.
          </p>
        </div>

        <div className="education__grid">
          {education.map((item, i) => (
            <article
              key={item.title}
              className="education__card card reveal"
              data-delay={i * 150}
            >
              <div className="education__card-accent" />
              <span className="education__period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="education__school">{item.school}</p>
              {item.details.length > 0 && (
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <span className="education__bullet">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
