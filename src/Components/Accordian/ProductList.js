
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const ErrorMessage = ({ error }) =>
error ? <strong>{error}</strong> : null;

const LoadingMessage = ({ loading }) =>
loading ? <em>{loading}</em> : null;

function ProductCard ({ error, loading, product }) {
    return(
        <section>
            <ErrorMessage error={error} />
            <LoadingMessage loading={loading} />  
                <Container className='item-pic-size'>
                    <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="holder.js/100px160" /> 
                         <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text >
                            {product.summary}
                        </Card.Text>
                        </Card.Body>
                     </Card>
                 </Container>
        </section>
    )};

    export default ProductCard;
