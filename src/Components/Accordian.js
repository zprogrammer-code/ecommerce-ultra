
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css";
import { Container } from 'react-bootstrap';


export function Accordian() {
    return (
      <Container className='item-pic-size'>
        <Row xs={6} md={4} className="g-4 mt-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                  <Card.Title>Personalized Coffee Mug</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

 