import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import UltraNavbar from './Navbar';
import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import Accordian from '../Components/Accordian';
import Pagination from '../Components/Pagination';

function Store() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
         <Accordian/>
         <Pagination/>
        </>
    );
};

export default Store;