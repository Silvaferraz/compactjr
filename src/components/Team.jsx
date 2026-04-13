import '../styles/Team.css'

function Team() {
  const teams = [
    {
      id: 1,
      image: '/images/team-full-1.jpg',
      title: 'Equipe Compact',
      subtitle: 'Desenvolvimento & Inovação',
      description: 'Profissionais dedicados transformando ideias em soluções digitais de impacto. Expertise em desenvolvimento full stack, design e estratégia digital.',
      stats: [
        { label: 'Projetos', value: '50+' },
        { label: 'Clientes', value: '30+' },
        { label: 'Anos', value: '5+' },
      ],
    },
    {
      id: 2,
      image: '/images/team-full-2.jpg',
      title: 'Equipe Compact',
      subtitle: 'Design & Estratégia',
      description: 'Criativos talentosos que combinam estética premium com funcionalidade. Especializados em UX/UI, branding e experiência do usuário.',
      stats: [
        { label: 'Designs', value: '50+' },
        { label: 'Prêmios', value: '5+' },
        { label: 'Satisfação', value: '98%' },
      ],
    },
  ]

  return (
    <section id="team" className="team-section">
      <div className="container">
        {/* Header */}
        <div className="team-header">
          <h2 className="team-title">Nosso Time</h2>
          <p className="team-subtitle">
            Profissionais experientes dedicados a transformar suas ideias em realidade
          </p>
        </div>

        {/* Team Cards */}
        <div className="team-cards-grid">
          {teams.map((team) => (
            <div key={team.id} className="team-card-large">
              {/* Image */}
              <div className="team-image-container">
                <img
                  src={team.image}
                  alt={team.title}
                  className="team-image-large"
                />
              </div>

              {/* Overlay */}
              <div className="team-overlay-large">
                <div className="overlay-content">
                  <h3 className="overlay-title">{team.title}</h3>
                  <p className="overlay-subtitle">{team.subtitle}</p>
                  <p className="overlay-description">{team.description}</p>

                  {/* Stats */}
                  <div className="team-stats">
                    {team.stats.map((stat, index) => (
                      <div key={index} className="stat-item">
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a href="#contact" className="team-cta-btn">
                    Conheça Melhor
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team