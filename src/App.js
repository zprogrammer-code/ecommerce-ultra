// import logo from './logo.svg';
import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import UltraNavbar from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
import React from 'react';
import HeroSection from './Components/HeroSection';
import '/home/zprogrammercode/ecommerce-ultra/src/index.css';

function App(){

   return( 
      <>
         <CovidAlert/>
         <UltraNavbar/>
         <footer>
         <HeroSection/>
            </footer>
        
      </>
   )
};

export default App;
