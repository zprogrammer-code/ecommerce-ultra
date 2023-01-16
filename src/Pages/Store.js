import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css';
import { UltraNavbar } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
import { CovidAlert } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import { MainSearch } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Search.js';
import { Pagination } from 'react-bootstrap';



export function Store() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
        <MainSearch/>
        <Pagination/>
        </>
    );
};

/*
         <Accordian/>
         <PageNavigation />
import { Accordian } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Accordian.js';
import { PageNavigation } from '../Components/Pagination';;
*/
