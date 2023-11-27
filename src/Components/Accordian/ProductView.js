import React from "react";
import ProductPage from "./ProductPage";
import { Card, Col, FormGroup, Row } from "react-bootstrap";

const ProductView = () => {
    const {
        product,
        getImage,
        selectedSize,
        selectedQuantity,
        setSelectedSize,
        handleQuantityChange,
         } = ProductPage();

         if (!product || !product.attributes) {
            return null;
         }
         const { attributes } = product;

         const quantity = Array.from(Array(Number(atrributes.quantity)).keys());
         return (
                <Card className="product-details">
                    <Row>
                        <Col sm="12" md="8">
                            <Card.Body>
                                <Card.Title>{attributes.name}</Card.Title>
                                <Card.Text>{attributes.summary}</Card.Text>
                                <Card.Subtitle>
                                    <strong>Price: {attributes.price}</strong>
                                </Card.Subtitle>
                                <Card.Subtitle>{attributes.quantity} items left</Card.Subtitle>
                                <div>
                                    <Card.Subtitle>Sizes:</Card.Subtitle>
                                    <div className="sizes">
                                        {attributes.sizes.map((size) => {
                                            <span key={size.name} 
                                                  className={`${selectedSize === size.name ? "active" : ""}`}
                                                  onClick={() => setSelectedSize(size.name)}
                                                  >
                                                {size.name}
                                            </span>
                                        })}
                                    </div>
                                </div>
                                <FormGroup>
                                    <Label for="exampleSelect">Selected items</Label>
                                    <Input
                                     type="select"
                                     name="quantity" 
                                     id="exampleSelect"
                                     onChange={handleQuantityChange}
                                     >
                                        {quantity.map((number) => {
                                            <option key={number}>{number}</option>
                                        })}
                                      
                                    </Input>
                                </FormGroup>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>
         )
                                    }
         export default ProductView;


/*  <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>*/