import React, { useState } from 'react'
import '../styles/Footer.css'
const FAQ = [
    {
        q: 'Posso levar meu próprio equipamento?',
        a: 'Sim! Jogadores podem trazer suas próprias réplicas e equipamentos, desde que passem pela cronografia obrigatória antes de cada partida. Também temos kits completos disponíveis para aluguel.',
    },
    {
        q: 'Posso levar menor de idade?',
        a: 'Sim, menores de 18 anos podem participar com autorização assinada por um responsável legal. Menores de 14 anos devem estar acompanhados de um responsável durante toda a partida.',
    },
    {
        q: 'Não é perigoso?',
        a: 'O airsoft é um esporte seguro quando praticado com as proteções corretas. O uso de óculos balísticos é obrigatório, e todas as partidas contam com briefing de segurança e ranger em campo.',
    },
]

function FaqItem({ item }) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`faq-item ${open ? 'faq-open' : ''}`}>
            <button className="faq-question" onClick={() => setOpen(o => !o)}>
                <span>{item.q}</span>
                {/* <FaChevronDown className="faq-arrow" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16" />
            </button>
            <div className="faq-answer-wrap">
                <p className="faq-answer">{item.a}</p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="coliseu-footer">
            <div className="container">

                {/* ── TOPO ── */}
                {/* ── LOGO DESTAQUE ── */}
                <div className="footer-logo-wrapper">
                    <a to="#" className="footer-logo">
                        <img src="/images/logo_nav.png" alt="Compact Jr Logo" loading="lazy" />
                    </a>
                </div>

                {/* ── CONTEÚDO ── */}
                <div className="row footer-top g-4 my-2 d-flex justify-content-center text-center">

                    {/* Links navegação */}
                    <div className='col-12 col-lg-4 mt-5 d-none d-sm-block'>
                        <h5 className="footer-col-titulo">Navegação</h5>
                        <ul className="footer-links">
                            <li className="d-flex gap-2 justify-content-center flex-wrap">
                                <a href="#servicos">Serviços</a>
                                <a href="#portfolio">Portfólio</a>
                                <a href="#processo">Processo</a>
                                <a href="#equipe">Equipe</a>
                                <a href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className='col-12 col-lg-4 mt-5'>
                        <h5 className="footer-col-titulo">Contato</h5>
                        <ul className="footer-links">
                            <li>
                                Email: <a href="mailto:#">contato@compactjr.com</a>
                            </li>
                            <li>
                                Telefone: <a href="tel: "> (55) 99661-8123 </a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-4 mt-5'>
                        <h5 className="footer-col-titulo">Redes sociais</h5>

                        <div className="footer-social-container">
                            <a href="https://www.instagram.com/compact.jr/" target="_blank" rel="noopener noreferrer">
                                <div className="footer-social-icon">
                                    <img src="/images/instagram.png" alt="Instagram" />
                                </div>
                            </a>

                            <a href="https://www.facebook.com/compactjr/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                                <div className="footer-social-icon">
                                    <img src="/images/facebook.png" alt="Facebook" />
                                </div>
                            </a>

                            <a href="https://wa.me/55996618123" target="_blank" rel="noopener noreferrer">
                                <div className="footer-social-icon">
                                    <img src="/images/whatsapp.png" alt="Whatsapp" />
                                </div>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 col-md-6 footer-bottom-links align-items-center">
                        <a href="#" className="footer-privacy">Política de Privacidade</a>
                        <a href="#" className="footer-terms">Termos de Uso</a>
                    </div>
                    <div className="col-12 col-md-6 footer-credits footer-top">
                        <p className="footer-copyright">© {new Date().getFullYear()} CompactJr. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default React.memo(Footer);