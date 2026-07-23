import { profile } from '../data/portfolio'
import './About.css'

export default function About() {
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
          <div className="about__card card reveal">
            <h3>Profil</h3>
            <p>{profile.bio}</p>
          </div>

          <div className="about__highlights">
            {[
              { label: 'Spécialité', value: 'Développement Web Full-Stack' },
              { label: 'Localisation', value: profile.location },
              { label: 'Formation', value: 'ISTA - OFPPT, Développement Digital' },
              { label: 'Approche', value: 'Autonomie, rigueur et travail en équipe' },
            ].map((item) => (
              <div key={item.label} className="about__highlight card reveal">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
