
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ErrorMessage = ({ error }) =>
error ? <strong>{error}</strong> : null;

const LoadingMessage = ({ loading }) =>
loading ? <em>{loading}</em> : null;

function ProductList ({ error, loading, products }) {
    return(
        <section>
            <ErrorMessage error={error} />
            <LoadingMessage loading={loading} /> 
                <Container className='item-pic-size'>
                    <Card style={{ width: '15rem' }} key={product.id} >
                    <Card.Img variant="top" src="holder.js/100px160" />                        <Card.Body>
                        <Card.Title>Personalized Coffee Mug</Card.Title>
                        <Card.Text >
                             This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                     </Card>
                 </Container>
        </section>
    );

    export default ProductList;
}