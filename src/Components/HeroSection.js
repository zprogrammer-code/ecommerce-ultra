import React from 'react';
import "/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Image } from 'react-bootstrap';



export function HeroSection() {
    return(
        <>
        <div className='the-real-herosection-container'>
            
            
            <Container className='herosection-content'>
            <div className= 'hero_wrapper'>
            <Image
                alt=""
                src="/home/zprogrammercode/ecommerce-ultra/src/Assets/logo"
                />
                <h1> I love these outfits more every day</h1>
                <p>Our outfits and styles are personally selected by a head female and male stylist</p>
                <Button href="Store" type='button' class="btn btn-primary">Shop Merch</Button>
            </div>
            </Container>
        </div>
        </>
    );
};

