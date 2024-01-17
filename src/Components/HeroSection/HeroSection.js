import React from 'react';
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';



function HeroSection() {
    return(
        <>  
            <Container className='herosection-content'>
                <div className='logo-box'>
                    <img src='https://res.cloudinary.com/dlnshpfdv/image/upload/v1705429588/imageedit_7_7124736957_lllwdj.png' alt='logo' className='favicon'/>
                </div>
            <div className= 'text-box'>
            
                                <h1>
                                    <span className='primary-heading'>I love these outfits more every day</span>
                                    <span className='sub-heading'>Our outfits and styles are personally selected by a head female and male stylist</span>
                                </h1>
                <a href="Store" class="btn btn-primary btn-animated">Shop Merch</a>
            </div>
            
            </Container>
       
        </>
    );
};

export default HeroSection
