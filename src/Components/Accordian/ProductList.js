
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Products from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Accordian/Products.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import { Link  } from 'react-router-dom';




class ProductCards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: Products
        }
    }


    render() {
        
        const list = this.state.products
        console.log(list);

        return (
            <>
                <Row xs={6} lg={4} className="product-section g-4 mt-6">

                    {list.map((product) => (
                        <Col>
                        
                            <Container>
                                <Card key={product.id} className='product-card block-example border border-0 border-dark' >
                                 <Link to={`/ProductView/${product.id}`} > 
                                    <Card.Img variant="top" src={product.pic} className='image-zoom'/>
                                 
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text >
                                            {product.summary}
                                            <h3>PRICE: {product.price}</h3>
                                        </Card.Text>
                                    </Card.Body>
                                    </Link>
                                </Card>
                            </Container>
                        </Col>
    ))}

                </Row>
            </>
        )
    };

}

export default ProductCards;

