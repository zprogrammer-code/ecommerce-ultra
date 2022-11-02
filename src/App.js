
import React from 'react';
import '/home/zprogrammercode/ecommerce-ultra/src/index.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { HomePage }  from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Home.js';
import { Store } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Store.js';
import { ContactInfo } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Contact.js';



function App(){

   return( 
      
           <Container>
               <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/Store" element={<Store />}/>
                  <Route path="/Contact" element={<ContactInfo />}/>
               </Routes>   
            </Container>
           )
            
};

export default App;


            /*
              <CovidAlert/>
              <UltraNavbar/>
              <HeroSection/>
              import UltraNavbar from '/home/zprogrammercode/ecommerce-ultra/src/Components/Navbar.js';
              import CovidAlert from '/home/zprogrammercode/ecommerce-ultra/src/Components/Alert.js';
              import HeroSection from '/home/zprogrammercode/ecommerce-ultra/src/Components/HeroSection.js';

            import { Routes, Route } from 'react-router-dom';
            import { Container } from 'react-bootstrap';
            import { HomePage } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Home.js';
            import { Store } from './Pages/Store';
            import { ContactInfo } from './Pages/Contact.js';
                  
             <Container>
               <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/Store" element={<Store />}/>
                  <Route path="/Contact" element={<ContactInfo />}/>
               </Routes>   
            </Container>*/