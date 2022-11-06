import React from 'react';
import '/home/zprogrammercode/ecommerce-ultra/src/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export function HeroSection() {
    return(
        <>
        <div className='mt-5'>
            
            
            <Container className='d-flex align-items-center justify-content-center  mt-5'>
            <div className= 'hero_wrapper'>
                <h1> I love these outfits more every day</h1>
                <p>Our outfits and styles are personally selected by a head female and male stylist</p>
                <Button href="Store" type='button' class="btn btn-primary">Shop Merch</Button>
            </div>
            </Container>
        </div>
        </>
    );
};

