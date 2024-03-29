

import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css";
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Assets/Ultra-1 (4).jpg";




function UltraNavbar() {
   
    return(
        <header>
       

          <div className='toggle-btn'>
            <span></span>
            <span></span>
            <span></span>
          </div>
   

              <nav bg='grey' varient='dark' className='navbar-nav'>
                             
        <div className='logo-box'>
           <img src='https://res.cloudinary.com/dlnshpfdv/image/upload/v1705429588/imageedit_7_7124736957_lllwdj.png' alt='logo' className='favicon'/>
         </div>
              <a href='/Home'>
              <img src="https://res.cloudinary.com/dlnshpfdv/image/upload/v1705386365/imageedit_3_4560604454_t6siy0.png" alt='logo' className='logo'/>
              </a>
               <div className='link-container'>
              
                                <Button href="/Home" className=" custom-row block-example border border-0 border-dark" variant="outline-dark">
                                
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="25" 
                                height="25" 
                                fill="black" 
                                class="bi bi-house-heart-fill" 
                                viewBox="0 0 16 16">
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
</svg>
  Home
                                </Button>
 
                                <Button href="/Store" className=" custom-row block-example border border-0 border-dark" variant="outline-dark">

                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="25" 
                                height="25" 
                                fill="black" 
                                class="bi bi-house-down-fill" 
                                viewBox="0 0 16 16">
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0Z"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
                                    Store
                                </Button>
                                <Button href="/Blog" className=" custom-row block-example border border-0 border-dark" variant="outline-dark">

    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    fill="black" class="bi bi-house-down-fill" viewBox="0 0 16 16">
  <path d="M12.5 9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm.354 5.854 1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0Z"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
                                    BlogPage
                                </Button>
                                <Button href="/Contact" className=" custom-row block-example border border-0 border-dark" variant="outline-dark">

                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="25" 
                                height="25" 
                                fill="black" 
                                class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                                    Contact
                                </Button>
                                
                                <Button href="/CheckOut" className=" custom-row block-example border border-0 border-dark" variant="outline-dark">
                                <span className='bag-quantity'>
                                      <span>3</span>
                                    </span>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            fill="black" 
                            class="bi bi-cart-fill" 
                            viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                          </svg>     
                         </Button>    
                      </div>   
                       
        </nav>
        </header>
    );
};

export default UltraNavbar;


                /*<Image
                alt="logo"
                src="src/Assets/ultra-1.png"
                className="d-inline-block align-top"
                />*/