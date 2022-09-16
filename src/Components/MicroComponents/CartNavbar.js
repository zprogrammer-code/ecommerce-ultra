import React from 'react';

const CartNavbar = () => {
    
    return(
        <>
        <div alt="cart-nav">

	{/* ::before */}

	        <span id="brand">
    	        <a href="Ultra.com">
                <img src="" alt="brand"></img>
                </a>
            </span>

         {/* ::after */}

         {/* ::before */}

            <nav role="navigation">
	            <div alt="navigation_container">
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
						</div>
                </nav>
                </div>
            </>

        )
};

export default CartNavbar