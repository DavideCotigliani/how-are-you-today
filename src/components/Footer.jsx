import React from 'react'
import { Col, Container, Row, Form, FormSelect } from 'react-bootstrap';
const Footer = () => {
  return (
      <div>
          <footer className='footer mt-3 pt-3'>
              <Container fluid className='px-5'>
                  <Row className="mb-4">
                       <Col md={4} className="mb-3">
            <p>
              <h3>Scopri l'umore di oggi.</h3>
            </p>
            <p>Powered by Davide Cotigliani</p>
          </Col>
                  </Row>
              </Container>
              
          </footer>
    </div>
  )
}

export default Footer

