import '../styles/Services.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Services() {
  const items = [
    {
      id: 1,
      img: '/images/website.jpg',
      title: 'Desenvolvimento Web',
      subtitle: 'Sites profissionais e responsivos',
      text: 'E-commerces, landing pages e SPAs com foco em performance e alta taxa de conversão.',
    },
    {
      id: 2,
      img: '/images/app.webp',
      title: 'Aplicativos',
      subtitle: 'Seu negócio na palma da mão',
      text: 'Aplicativos personalizados com foco em usabilidade, performance e segurança.',
    },
    {
      id: 3,
      img: '/images/chatbot.webp',
      title: 'Chatbots',
      subtitle: 'Atendimento automatizado e inteligente',
      text: 'Melhore a experiência do cliente, otimize processos e aumente a eficiencia do atendimento.',
    }
  ]

  return (
    <section id="services" className="reveal">
      <div className="container-fluid px-5">
        <div className="text-center mb-3">
          <h2 className="section-title">Serviços</h2>
          <p className="section-text">
            Conheça as soluções que nós oferecemos para sua empresa
          </p>
        </div>

        <CardGroup>
          {items.map((item) => (
            <Card key={item.id} className="mx-1 card-service">
              <Card.Img variant="top" src={item.img} className="img-service" />
              <Card.Body className="card-body-service">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="description-service">
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    </section>
  )
}

export default Services