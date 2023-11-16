 
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
      <CovidAlert/>
      <UltraNavbar/>
      <HeroSection/>
      </div>
     </>
         )
      };

export default HomePage;


