
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';


const Accordian = ({items}) => {
    return(
      <>
      <Container className='item-pic-size'>
        <Row xs={6} md={4} className="g-4 mt-5">
        {items.from({ length: 4 }).map((_, idx) => {
            <Col>
              <Card style={{ width: '15rem' }} >
                <Card.Img variant='top' src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT7hFCNunykt85-qsqArfCm72HHRiSlBJ90QlYUfgTNpsGKc1Zapc5-Oo1r1Nz6e0NXSfnH8PAZInQk6nEszG6f1sTn9CnzKp-Eos_MGpLxN_CZwfKp8KuSa8Cg1IsGh5OmdxCBAWsYbQ&usqp=CAc'></Card.Img>
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
             })};
        </Row>
        </Container>
        </>
      
    
  };

  export default Accordian;

