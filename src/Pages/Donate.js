 
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import UltraNavbar from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/NavBar/Navbar.js';
import CovidAlert from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/AlertBar/Alert.js';
import OwlCarousel from '../Components/OwlCarosul/OwlCarosul.js';

function Donate(){

   return( 
      <> 
      <div className='DonatePage'>
      <CovidAlert/>
      <UltraNavbar/>
      <OwlCarousel/>
   
      </div>
     </>
         )
      };

export default Donate;
