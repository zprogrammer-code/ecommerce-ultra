import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UltraNavbar } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
import { CovidAlert } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import { Accordian } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Accordian.js';
import { Pagination } from '/home/zprogrammercode/ecommerce-ultra/src/Components/Pagination.js';

export function Store() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
         <Accordian/>
         <Pagination/>
        </>
    );
};

