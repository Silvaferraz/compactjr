import { useState } from 'react'
import '../styles/Portfolio.css'

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      image: '/images/fejers.webp',
      client: 'Fejers',
      description: 'A FEJERS é a Federação das Empresas Juniores do Rio Grande do Sul, organização responsável por impulsionar o ecossistema empreendedor entre universitários do estado.',
    },
    {
      id: 2,
      image: '/images/alquimia.webp',
      client: 'Alquimia',
      description: 'A Alquimia Skate Shop atua desde 2010 na cidade de Quaraí/RS, sendo referência na comercialização de artigos voltados para o universo do skate e streetwear.',
    },
    {
      id: 3,
      image: '/images/fasolo.webp',
      client: 'Fasolo',
      description: 'A Fasolo Consórcios é uma empresa de Santa Maria que atua na comercialização de consórcios nos segmentos de imóveis, construção, automóveis, motocicletas, caminhões e utilitários.',
    },
    {
      id: 4,
      image: '/images/meatshop.webp',
      client: 'Meat Shop',
      description: 'A Meat Shop é mais do que um açougue: é uma boutique de carnes especializada em cortes nobres para quem valoriza sabor, qualidade e atendimento diferenciado.',
    },
    {
      id: 5,
      image: '/images/destaque.jpg',
      client: 'Academia Destaque',
      description: 'A Academia Destaque é uma academia voltada à promoção de saúde, força e condicionamento físico, com ambiente climatizado, estacionamento gratuito e equipe qualificada.',
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="portfolio-title mb-3">Portfólio</h2>
            <p className="portfolio-text mb-4">
              Conheça os nossos trabalhos recentes!
              Criamos interfaces sob medida para destacar a sua marca
            </p>
            <a href="#" className="btn-portfolio">
              Ver mais projetos
            </a>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-carousel col-12">
            <div className="carousel-wrapper">
              <div className="carousel-item-container">
                <img
                  src={currentProject.image}
                  alt={currentProject.client}
                  className="portfolio-img"
                />
                <div className="carousel-overlay">
                  <h5 className="overlay-title">{currentProject.client}</h5>
                  <p className="overlay-description">{currentProject.description}</p>
                </div>
              </div>

              {/* Botões de Navegação */}
              <button className="carousel-btn prev-btn" onClick={handlePrev} aria-label="Anterior">
                ←
              </button>
              <button className="carousel-btn next-btn" onClick={handleNext} aria-label="Próximo">
                →
              </button>

              {/* Indicadores */}
              <div className="carousel-indicators-custom">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ir para projeto ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio