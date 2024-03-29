import React from "react";
import { Card, Col, Row, Button, Image } from "react-bootstrap";

import  Form  from "react-bootstrap/Form";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import Products from "./Products";
import UltraNavbar from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/NavBar/Navbar.js';
import CovidAlert from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/AlertBar/Alert.js';
import { PageNavigation } from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Pagination.js';

const ProductView = () =>  {
   

    const { id } = useParams();
   
    const product = Products.find((product) => {
        return(product.id === id)
    });
  console.log(product); 
  

         return(<div>
            <CovidAlert/>
            <UltraNavbar/>
            <div className="image-card-placing">
                <Card>
                
                    <Row>
                    <Col>
                <Image variant="top" src={product.pic} className='product-details'/>
                    </Col>
                        <Col sm="12" md="6" className="product-details-info">
                            <Card.Body>
                                <h1>{product.name}</h1>
                                <Card.Text>{product.summary}</Card.Text>
                                <Card.Subtitle>
                                    <strong>Price:{product.price} </strong>
                                </Card.Subtitle>
                               
                                <div>
                                    <Card.Subtitle>Sizes:</Card.Subtitle>
                                   <div className="sizes">
                                            <span >
                                                9
                                            </span>
                                    </div>
                                </div>
                                <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
                               
                                <Button color="primary"> Add to Cart</Button>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>
             
                </div>
                <PageNavigation/>
                </div>
         )
    }
         export default ProductView;

         

  
  


