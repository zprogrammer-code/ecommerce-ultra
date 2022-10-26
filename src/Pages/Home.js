import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import UltraNavbar from './Navbar';
import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import HeroSection2 from './HeroSection';

function HomePage() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
         <HeroSection2/>
        </>
    );
};

export default HomePage;