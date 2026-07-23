import { skills } from '../data/portfolio'
import './Skills.css'

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
          {skills.map((group) => (
            <article key={group.category} className="skills__card card reveal">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
