import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: '',
    message: '',
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.objective) newErrors.objective = 'Objetivo é obrigatório';
    if (!formData.message) newErrors.message = 'Mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('objective', formData.objective);
    data.append('message', formData.message);
    if (formData.file) data.append('file', formData.file);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        console.log('Mensagem enviada com sucesso!');
        setFormData({
          name: '',
          email: '',
          objective: '',
          message: '',
          file: null,
        });
        setErrors({});
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      console.log('Erro ao enviar a mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Entre em Contato</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Objetivo</Form.Label>
                  <Form.Select
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    isInvalid={!!errors.objective}
                  >
                    <option value="">Selecione</option>
                    <option value="consulta">Consulta</option>
                    <option value="suporte">Suporte</option>
                    <option value="feedback">Feedback</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.objective}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Upload de Arquivo (Opcional)</Form.Label>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Informações de Contato</h4>
              <p><strong>Email:</strong> contato@exemplo.com</p>
              <p><strong>Celular:</strong> (11) 99999-9999</p>
              <p><strong>Redes Sociais:</strong></p>
              <ul>
                <li><a href="https://facebook.com/exemplo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com/exemplo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com/in/exemplo" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;