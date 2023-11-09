
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/Accordian/ProductList.js';




class Accordian extends React.Component {
    
  render(){ 
  

    return(
        <Row xs={6} md={4} className="g-4 mt-5">
       {Array.from({ length: 4 }).map((___, index) => ( 
            <Col key={index}>
              <ProductCard/>
            </Col>
          ))}
            
        </Row>
    );
      
    
  }};

  export default Accordian;

