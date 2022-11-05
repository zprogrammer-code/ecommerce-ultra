import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


export function UltraNavbar() {
    
    return(
        <>
        <Navbar bg='primary' varient='dark' className='navbar-navv  '>
            <Container>   
                
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/home/zprogrammercode/ecommerce-ultra/src/Assets/Ultra-1 (1).png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ultra
          </Navbar.Brand>
        
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav varient="tabs" className="justify-content-center Row">
                                <Nav.Link href="Home" className="col">
                                    Home
                                </Nav.Link>
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
                        </Navbar.Collapse>                  
            </Container>
        </Navbar>
        </>
    );
};
