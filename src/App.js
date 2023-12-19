
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import HomePage from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Pages/Home.js';
import Store from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Pages/Store.js';
import ContactPage from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Pages/Contact.js';
import Product from './Pages/Product';
import ProductView from './Components/Accordian/ProductView';
import Donate from './Pages/Donate';
import NotFound from './Components/Notfound';
import { useGetAllProductsQuery } from './Features/productsApi';



function App(){
   const { data, error, isloading } = useGetAllProductsQuery

   return( 
            <>
         <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/Home" element={<HomePage/>}/>
            <Route path="/Store" element={<Store/>}/>
            <Route path="/Contact" element={<ContactPage/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Donate" element={<Donate/>}/>
            <Route path="/*" element={<NotFound/>}/>
            <Route path='/ProductView/:id' element={<ProductView/>}/>
            
            </Routes>
     
      </> 
         )};

export default App; 


            /*
          
                  import '/home/zprogrammercode/ecommerce-ultra/src/index.css'
          */