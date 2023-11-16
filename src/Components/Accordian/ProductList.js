
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';


const ErrorMessage = ({ error }) =>
error ? <strong>{error}</strong> : null;

const LoadingMessage = ({ loading }) =>
loading ? <em>{loading}</em> : null;

function ProductCard ({ error, loading, products }) {
    return(
            <>
            <ErrorMessage error={error} />
            <LoadingMessage loading={loading} />  

            <Row xs={6} lg={4} className="g-4 mt-5">
                       
       {Array.from({ length: 12 }).map((___, idx) => ( 
            <Col key={idx}>
                <Container >
                    <Card className='product-card' >
                    <Card.Img variant="top"src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcX9MOessS7zpD7QuN1WQihCVxk4uk42-JfG0kTIobTQZJJUiW7OwWYX6DcWUmYs7Jh3W1hCWjxjbAyZsp2AHk2sHzUgvhyDTHaib5aPF7C74_8QZvU98erw" /> 
                         <Card.Body>
                        <Card.Title>Product title placeholder</Card.Title>
                        <Card.Text >
                            This will be the product description, 
                            The product summary and choice details and of course the price. PRICE: $125
                        </Card.Text>
                        </Card.Body>
                     </Card>
                 </Container>
            </Col>
             ))}
            </Row>
         </>
    )};

    export default ProductCard;

   /* xs={6} lg={4} 
   https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcX9MOessS7zpD7QuN1WQihCVxk4uk42-JfG0kTIobTQZJJUiW7OwWYX6DcWUmYs7Jh3W1hCWjxjbAyZsp2AHk2sHzUgvhyDTHaib5aPF7C74_8QZvU98erw*/