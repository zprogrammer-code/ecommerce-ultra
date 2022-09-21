import React from 'react';
import './CartNavbar.css';


const CartNavbar = () => {
    
    return(
        <>
        <nav className="cart-nav">

	{/* ::before */}

	        <span id="brand">
    	        <a href="Ultra.com">
                <img src="" alt="brand"></img>
                </a>
            </span>

         {/* ::after */}

         {/* ::before */}

	            
                    <ul>
                        <li className="nav-item">
                            <a  className="nav-link" href="#">
                                Home
                            </a>
                        </li >
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Shop
                            </a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Donate
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
	                    </li>
                    </ul>
					
               
                </nav>
            </>

        )
};

export default CartNavbar