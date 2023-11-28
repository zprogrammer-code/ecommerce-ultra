import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import UltraNavbar from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/NavBar/Navbar.js';
import CovidAlert from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/AlertBar/Alert.js';
import { PageNavigation } from '../Components/Pagination';
import ProductView from '../Components/Accordian/ProductView';



function Product() {

    return(
        <>
        <div className='ItemContainer'> 
             <CovidAlert/>
            <UltraNavbar/>
            <ProductView/>
            <PageNavigation/>
        </div>
        </>)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
};

export default Product;

