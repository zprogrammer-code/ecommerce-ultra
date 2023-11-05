import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import UltraNavbar from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/NavBar/Navbar.js';
import CovidAlert from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/AlertBar/Alert.js';
import ContactInfo from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/ContactForm/ContactInfo.js';

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

