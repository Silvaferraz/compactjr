import React, { useState, useRef } from 'react';
import '../styles/ContactCTA.css';

const ContactCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    objetivo: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleButtonClick = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.objetivo) newErrors.objetivo = 'Objetivo é obrigatório';
    if (!formData.mensagem.trim()) newErrors.mensagem = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    data.append('nome', formData.nome);
    data.append('email', formData.email);
    data.append('objetivo', formData.objetivo);
    data.append('mensagem', formData.mensagem);

    try {
      const response = await fetch('https://formspree.io/f/xdaynvpg', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });
      if (response.ok) {
        window.alert('Mensagem enviada com sucesso!');
        setShowForm(false);
        setFormData({ nome: '', email: '', objetivo: '', mensagem: '' });
        setErrors({});
      } else {
        window.alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      window.alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="card-contact">
          <div className="text-center">
            <h2 className="section-title">Pronto para levar a sua empresa para outro nível?</h2>
            <p className="section-text mb-4">Comece com uma SPA moderna, com visual forte e animações sutis que reforçam
              a identidade da empresa.
            </p>
            <button className="cta-contact" onClick={handleButtonClick}> Falar com a equipe</button>
          </div>
        </div>
        {showForm && (
          <div className="card-contact-form" ref={formRef}>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="input-label">Nome:</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} className="input-form col-12" />
                {errors.nome && <span>{errors.nome}</span>}
              </div>
              <div>
                <label className="input-label">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="input-form col-12" />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div>
                <label className="input-label">Objetivo:</label>
                <select name="objetivo" value={formData.objetivo} onChange={handleInputChange} className="input-form col-12">
                  <option value="">Selecione</option>
                  <option value="consulta">Consulta</option>
                  <option value="projeto">Projeto</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.objetivo && <span>{errors.objetivo}</span>}
              </div>
              <div>
                <label className="input-label">Mensagem:</label>
                <textarea name="mensagem" value={formData.mensagem} onChange={handleInputChange} className="input-form col-12"></textarea>
                {errors.mensagem && <span>{errors.mensagem}</span>}
              </div>
              <div className="d-flex justify-content-end mt-3"><button className="form-btn" type="submit">Enviar</button></div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactCTA;