import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("it-IT", {
        day: "numeric",
    month: "long",
    year: "numeric",
    })
    const hour = today.getHours();
    const timeOfDay = hour < 12 ? "Mattina ☀️" : hour < 18 ? "Pomeriggio 🌤️" : "Sera 🌙";
  return (
    <footer className="mt-4 py-4 bg-secondary border-top">
      <Container>
        <Row className="text-center">
          <Col>
         <h5 className="mb-2">Oggi {formattedDate} • {timeOfDay}</h5>
            <p className="mb-1 text-muted">
              Scopri come ti senti oggi
            </p>
            <small className="text-secondary">
              Powered by Davide Cotigliani
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
