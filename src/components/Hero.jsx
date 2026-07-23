import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="accueil" className="hero section">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="hero__badge">Disponible pour de nouvelles opportunités</p>
          <h1 className="hero__title">
            Bonjour, je suis{' '}
            <span className="gradient-text">
              {profile.firstName} {profile.lastName}
            </span>
          </h1>
          <p className="hero__subtitle">{profile.title}</p>
          <p className="hero__location">{profile.location}</p>
          <p className="hero__description">{profile.bio}</p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Me contacter
            </a>
            <a href={profile.cvUrl} className="btn btn-secondary" download>
              Télécharger mon CV
            </a>
          </div>

          <div className="hero__links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__image-wrap card">
            <div className="hero__image-glow" />
            <img src={profile.imageUrl} alt={`${profile.firstName} ${profile.lastName}`} />
            <div className="hero__image-badge">
              <span>Développeur</span>
              <strong>Full-Stack</strong>
            </div>
          </div>

          <div className="hero__stats">
            <div className="hero__stat card">
              <strong>3+</strong>
              <span>Projets réalisés</span>
            </div>
            <div className="hero__stat card">
              <strong>Full-Stack</strong>
              <span>Front & Back-End</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
