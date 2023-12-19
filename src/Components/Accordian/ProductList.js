
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import { Link  } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../Features/productsApi';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/cartSlice';




const ProductCards = () => {

  
        const { data, error, isLoading } = useGetAllProductsQuery();
        const dispatch = useDispatch();

        const handleAddToCart = (product) => {
                
            dispatch(addToCart(product));
        }
    


   
        
       
        console.log({data});

        return (
            <div className='productContainer'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>An error occured..</p>
                ) : (
                    <>
                    <h2>New Arrivals</h2>
                <Row xs={6} lg={4} className="product-section g-4 mt-6">

                    {data.map((product) => (
                        <Col>
                        
                           
                                <Card key={product.id} className='product-card' >
                                 <Link to={`/ProductView/${product.id}`} > 
                                    <Card.Img variant="top" src={product.pic} className='image-zoom'/>
                                 
                                    <Card.Body>
                                        <Card.Title className='card-title'>{product.name}</Card.Title>
                                        <Card.Text className='card-details' >
                                            {product.short}
                                            <h4> {product.price}</h4>
                                        </Card.Text>
                                    </Card.Body>
                                    </Link>
                                    <Button className='card-button' varient="primary" onClick={() => handleAddToCart(product)}>
                                        Add To Cart
                                        </Button>
                                </Card>
                          
                        </Col>
    ))}

                </Row>
                </>
                )}
            </div>
        )
    };



export default ProductCards;

