import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "./Products";

const ProductView = () =>  {
   

    
    const { id } = useParams();
   
    const product = Products.find((product) => {
        return(product.id === id)
    });
    
  console.log(product);

         return(
            <>
                <Card className="product-details">
                    <Row>
                        <Col sm="12" md="8">
                            <Card.Body>
                            <Card.Img variant="top" src={product.pic} className='image-zoom'/>
                                <Card.Title>{product.name}</Card.Title>
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
                               
                                <Button color="primary"> Add to Cart</Button>
                            </Card.Body>
                        </Col>
                    </Row>

                </Card>
                </>
         )
    }
         export default ProductView;


/*   <FormGroup>
                                    <FormGroup.Label for="exampleSelect">Selected items</FormGroup.Label>
                                    <FormGroup.Input
                                     type="select"
                                     name="quantity" 
                                     id="exampleSelect"
                                     
                                     >
                                      <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                      
                                    </Form Group.Input>
                                </FormGroup>

{.sizes.map((size) => {
                                            <span key={size.name} 
                                                  className={`${selectedSize === size.name ? "active" : ""}`}
                                                  onClick={() => setSelectedSize(size.name)}
                                                  >

                                          const {
        product,
        selectedSize,
        selectedQuantity,
        setSelectedSize,
        handleQuantityChange,
         } = useProductPage();

         if (!product || !product.attributes) {
            return null;
         }
         const { attributes } = product;

         const quantity = Array.from(Array(Number(atrributes.quantity)).keys());
         
         onChange={handleQuantityChange}*/