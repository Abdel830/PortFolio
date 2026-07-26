export const profile = {
  firstName: 'Abdelali',
  lastName: 'Ouamassi',
  title: 'Développeur Full-Stack Web',
  location: 'Oujda, Maroc',
  email: 'ouamassiabdelali2@gmail.com',
  phone: '+212 724528716',
  github: 'https://github.com/Abdel830',
  linkedin: 'https://www.linkedin.com/in/abdelali-ouamassi-55ba67362',
  cvUrl: '/assets/CV.pdf',
  imageUrl: '/assets/photoPro.jpeg',
  bio: `Je suis une personne motivée, sérieuse et passionnée par le domaine de l'informatique et du développement web. J'aime relever des défis qui me permettent d'améliorer mes compétences, je travaille aussi bien en équipe qu'en autonomie. Mon objectif est de mettre en pratique mes compétences en développement web, d'apprendre continuellement et de contribuer efficacement aux projets auxquels je participe.`,
}

export const skills = [
  {
    category: 'Front-End',
    items: ['JavaScript', 'React', 'TailwindCSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Back-End',
    items: ['Python', 'PHP', 'Laravel', 'Node.js'],
  },
  {
    category: 'Bases de données',
    items: ['MySQL', 'NoSQL'],
  },
  {
    category: 'Langues',
    items: ['Arabe — Langue maternelle', 'Français — Avancé', 'Anglais — Intermédiaire'],
  },
]

export const experiences = [
  {
    period: '2026',
    role: 'Développeur Full-Stack Web',
    company: 'Centre Régional des Formations et des Rencontres Oujda (CRFR)',
    type: 'Stage de Fin d\'Études',
    description:
      "Conception et développement d'une application web de gestion intégrée (ERP) centralisant l'hébergement, la logistique et le suivi des formations.",
  },
  {
    period: '2025 – 2026',
    role: 'Développeur Full-Stack Web',
    company: 'KhidmaService',
    type: 'Projet Personnel',
    description:
      "Conception et développement d'une plateforme de services connectant des clients (besoin d'un service) avec des prestataires (propose le service).",
  },
  {
    period: '2025',
    role: 'Développeur Front-End',
    company: 'IstaContact',
    type: 'Projet Collaboratif',
    description:
      "Développement en équipe d'un portail d'annonces administratives dédié aux stagiaires de l'ISTA.",
  },
]

export const education = [
  {
    period: '2024 – 2026',
    title: 'Diplôme de Technicien Spécialisé en Développement Digital',
    school: 'ISTA - OFPPT | Oujda, Maroc',
    details: [
      'Acquisition de bases solides en algorithmique, programmation orientée objet et gestion de bases de données.',
      'Spécialisation en développement web full-stack (Front-End & Back-End).',
      'Mise en pratique régulière via des projets académiques et des travaux pratiques.',
    ],
  },
  {
    period: '2024',
    title: 'Baccalauréat — Sciences Physiques',
    school: 'Oujda, Maroc',
    details: [],
  },
]

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'apropos', label: 'À propos' },
  { id: 'competences', label: 'Compétences' },
  { id: 'experiences', label: 'Expériences' },
  { id: 'formation', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]
