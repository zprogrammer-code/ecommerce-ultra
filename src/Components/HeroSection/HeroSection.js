import React from 'react';
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';



function HeroSection() {
    return(
        <>  
            <div className='herosection-content'>
               
            <div className= 'text-box'>
                                <h1>
                                    <span className='primary-heading'>Buy shoes that make money</span>
                                    <span className='sub-heading'>Our outfits and styles are personally selected by a head female and male stylist</span>
                                </h1>
                <a href="Store" class="btn btn-primary btn-animated">Shop Merch</a>
            </div>
            </div>
       
        </>
    );
};

export default HeroSection
