import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordian from './Accordian';
import UltraNavbar from './Navbar';
import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import Pagination from './Pagination';


function HeroSection2() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
         <Accordian/>
         <Pagination/>
        </>
    );
};

export default HeroSection2