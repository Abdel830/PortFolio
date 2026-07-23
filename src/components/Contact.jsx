import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact__wrapper card reveal">
          <div className="contact__content">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Travaillons ensemble</h2>
            <p className="section-subtitle">
              Vous avez un projet, un stage ou une opportunité ? N'hésitez pas à me contacter.
            </p>

            <div className="contact__details">
              <a href={`mailto:${profile.email}`} className="contact__detail">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact__detail">
                <span>Téléphone</span>
                <strong>{profile.phone}</strong>
              </a>
              <div className="contact__detail">
                <span>Localisation</span>
                <strong>{profile.location}</strong>
              </div>
            </div>

            <div className="contact__actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Envoyer un email
              </a>
              <a href={profile.cvUrl} className="btn btn-secondary" download>
                Télécharger le CV
              </a>
            </div>
          </div>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact__social card">
              <span>GitHub</span>
              <strong>Abdel830</strong>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact__social card">
              <span>LinkedIn</span>
              <strong>Abdelali Ouamassi</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
