
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '/home/zprogrammercode/ecommerce-ultra/src/index.css';
import HomePage from './Pages/Home';
import Store from './Pages/Store';
import ContactInfo from './Pages/Contact';

function App(){

   return( 
      <>
      <Container>
         <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/" element={<Store/>}/>
            <Route path="/" element={<ContactInfo/>}/>
         </Routes>
      </Container>
      </>
   )
};

export default App;
