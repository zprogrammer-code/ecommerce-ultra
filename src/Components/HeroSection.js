import React from 'react';
import '/home/zprogrammercode/ecommerce-ultra/src/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function HeroSection() {
    return(
        <div className='mt-5'>
            
            
            <Container className='d-flex align-items-center justify-content-center  mt-5'>
            <div className= 'hero_wrapper'>
                <h1> I love these outfits more every day</h1>
                <p>Our outfits and styles are personally selected by a head female and male stylist</p>
                <button type='button' class="btn btn-primary">Shop Merch</button>
            </div>
            </Container>
        </div>
    );
};

/*<div className= "hero_wrapper">
<Card className="text-center" varient="light">            
<Card.Body>
<Card.Title> I love these outfits more every day</Card.Title>
<Card.Text>
    Our outfits and styles are personally selected by a head female and male stylist
</Card.Text>
<Button variant="primary">Shop Merch</Button>
</Card.Body>
</Card>
</div>*/

export default HeroSection