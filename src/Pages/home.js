 
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css';
import { UltraNavbar } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
import { CovidAlert } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import { HeroSection } from '/home/zprogrammercode/ecommerce-ultra/src/Components/HeroSection.js';
import { MainSearch } from 'src/Components/Search.js';



export function HomePage(){

   return( 
      <> 
      <div className='HomePageContainer'>
      <CovidAlert/>
      <UltraNavbar/>
      <HeroSection/>
      <MainSearch/>
      </div>
     </>
         )};


