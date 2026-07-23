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
          {education.map((item) => (
            <article key={item.title} className="education__card card reveal">
              <span className="education__period">{item.period}</span>
              <h3>{item.title}</h3>
              <p className="education__school">{item.school}</p>
              {item.details.length > 0 && (
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
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
