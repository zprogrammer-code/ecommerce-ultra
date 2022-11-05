
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/home.js';
import { Store } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Store.js';
import { ContactInfo } from '/home/zprogrammercode/ecommerce-ultra/src/Pages/Contact.js';

function App(){

   return( 
            <>
         <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Store" element={<Store />}/>
            <Route path="/Contact" element={<ContactInfo />}/>
         </Routes>   
     
      </> 
         )};

export default App; 


            /*
          
                  import '/home/zprogrammercode/ecommerce-ultra/src/index.css'
          */