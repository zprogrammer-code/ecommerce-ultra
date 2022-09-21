import React from 'react';
import './CartNavbar.css';


const CartNavbar = () => {
    
    return(
        <>
        <nav className="cart-nav">

	{/* ::before */}
            <div className='nav-content-container'>

                <div className='nav-wrapper'>
	            
                    <span id="brand">
                        <a href="Ultra.com">
                            <img src="" alt="brand"></img>
                        </a>
                    </span>

                {/* ::after */}

                {/* ::before */}

	            
                        <ul className='navbar-nav'>
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
                                </a>
                            </li>
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
                </div>	
            </div>   
        </nav>
            </>

        )
};

export default CartNavbar