 
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import UltraNavbar from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/NavBar/Navbar.js';
import CovidAlert from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/AlertBar/Alert.js';
import HeroSection from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/HeroSection/HeroSection.js';

function HomePage(){

   return( 
      <> 
      <div className='HomePageContainer'>
      <div className='logo-box'>
                    <img src='https://res.cloudinary.com/dlnshpfdv/image/upload/v1705429588/imageedit_7_7124736957_lllwdj.png' alt='logo' className='favicon'/>
                </div>
      <CovidAlert/>
      <UltraNavbar/>
      <HeroSection/>
    
      </div>
     </>
         )
      };

export default HomePage;


