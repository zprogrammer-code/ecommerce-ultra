import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css";





export function UltraNavbar() {
   
    return(
        <>
        <Navbar bg='primary' varient='dark' className='navbar-nav'>
          
        <Container>   
       
                <Image
                alt=""
                src="/home/zprogrammercode/ecommerce-ultra/src/Assets/Ultra-1 (4).jpg"
                className="d-inline-block align-top"
                />{' '}
               
      
                            <Nav varient="tabs" className="Row">
                                <Button href="Home" className="col">
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
</svg>
                                    Home
                                </Button>
                                <NavDropdown title="Shop">
                                        <NavDropdown.Item href="#/action-1">Womens Tops</NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-2">Womens Bottoms</NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-3">Womens Shoes</NavDropdown.Item>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#/action-1">Mens Tops</NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-2">Mens Bottoms</NavDropdown.Item>
                                        <NavDropdown.Item href="#/action-3">Mens Shoes</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="Store">
                                    Store
                                </Nav.Link>
                                <Nav.Link href="Store">
                                    Donate
                                </Nav.Link>
                                <Nav.Link href="Contact">
                                    Contact
                                </Nav.Link>
                                <Nav.Link href="CheckOut" className="d-flex">
                                    CheckOut
                                </Nav.Link>
                            </Nav>
                                         
                        </Container>
        </Navbar>
        </>
    );
};


/*<HouseHeartFill/>

                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                        </Navbar.Collapse> 
                        
                           <Navbar.Brand href="#home" className='logo'>
                <Image
                alt=""
                src="/home/zprogrammercode/ecommerce-ultra/src/Assets/Ultra-1 (4).jpg"
                className="d-inline-block align-top"
                />{' '}
                Ultra
            </Navbar.Brand>*/