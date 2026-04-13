import '../styles/Process.css'
function Process() {
  const steps = [
    { n: '01', title: 'Descoberta', text: 'Entendemos o negócio e o objetivo da entrega.' },
    { n: '02', title: 'Estrutura', text: 'Definimos layout, conteúdo e hierarquia visual.' },
    { n: '03', title: 'Desenvolvimento', text: 'Codificamos com foco em performance e clareza.' },
    { n: '04', title: 'Entrega', text: 'Testamos, refinamos e preparamos para produção.' },
  ]

  return (
    <section id="process" className="reveal">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Processo</h2>
          <p className="section-text">
            Um fluxo simples ajuda a mostrar maturidade e organização.
          </p>
        </div>

        <div className="row g-4">
          {steps.map((step) => (
            <div className="col-12 col-md-6 col-lg-3" key={step.n}>
              <div className="card-tech-process h-100 p-4">
                <div className="text-white fw-bold mb-2 fs-4">{step.n}</div>
                <h3 className="fw-bold">{step.title}</h3>
                <p className="mb-0 text-process">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process