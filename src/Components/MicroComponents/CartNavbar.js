import React from 'react';
/*import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';*/
import './CartNavbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { House } from "react-bootstrap-icons";




function CartNavbar() {
    
    return(
        <>
        <nav className='cart-nav'>


            

            <div className='nav-content-container'>
	            dd
                    
            <ul className='navbar-nav'>
                    
                    
                    
                    
                   
               


                        
                            <li className="nav-item">
                                <a className="icon-button" href="#">
                                     <House/>
                                </a>
                            </li>
                         <NavItem icon="Shop"/>
                            <NavItem icon="Donate"/>
                            
                        </ul>
                
                        </div>
        </nav>
            </>

        )
        function Navbar(props){
            
        }
        function NavItem(props){
            return(
                <li className="nav-item">
                    <a href="#" className="icon-button" >
                        {props.icon}
                    </a>
                </li>
            )
        }
        function BrandLogo(props){
            return(<span id="header-logo">
            <a href="Ultra.com">
                <img src="/home/zprogrammercode/ecommerce-ultra/src/Assets/Ultra-1 (1).png"/*{props.logo}*/ alt="brand"></img>
            </a>
        </span>
        )}
};

export default CartNavbar