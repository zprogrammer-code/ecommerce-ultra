import React from 'react';
/*import Popper from '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';*/
import './CartNavbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { House, Telephone } from "react-bootstrap-icons";




function CartNavbar() {
    
            return(       <>
	            
                             <Navbar>
                                <NavItem>
                                    <BrandLogo/>
                                </NavItem>
                                <NavItem>
                                    House
                                    <House/>
                                </NavItem>
                                <NavItem icon="Shop">
                                    Shop
                                    <Telephone/>
                                </NavItem>
                                <NavItem icon="Donate">
                                    Donate
                                </NavItem>
                                <NavItem icon="Telephone">
                                    Telephone
                                </NavItem>
                                <NavItem icon="Check-Out">
                                    Check out
                                </NavItem>
                            </Navbar>
                
                          </>
                                )};

        function Navbar(props){
            return(
                <nav className='navbar'>
                    <ul className='navbar-nav'>

                    </ul>
                </nav>      )};

        
        function NavItem(props){
            
            return(         
                        <li className="nav-item">
                            <a href="Ultra.com" className="icon-button" >
                                 {props.icon}
                            </a>
                        </li>       )};

        function BrandLogo(props){
            return(
                    <div className="header-logo">
                        <a href="Ultra.com" className='header-logo'>
                            <img src="/home/zprogrammercode/ecommerce-ultra/src/Assets/Ultra-1 (1).png"/*{props.logo}*/ alt="brand"/>
                        </a>
                    </div>      )};


export default CartNavbar