import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import UltraNavbar from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
import ContactInfo from '/home/zprogrammercode/ecommerce-ultra/src/Components/ContactInfo.js';

function ContactPage() {
    return(
        <> 
         <CovidAlert/>
         <UltraNavbar/>
         <ContactInfo/>
        </>
    );
};

export default ContactPage

