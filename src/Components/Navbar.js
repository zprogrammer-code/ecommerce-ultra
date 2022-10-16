import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavbarBrand } from 'react-bootstrap';

function Navbar() {
    
    return(
        <>
        <Navbar bg='dark'>
            <Container>
                <Navbar.Brand href='#'>
                    <Navbar.Toggle>
                        <Navbar.Collapse>
                            <Nav>
                                <Nav.Link href="home">
                                    Home
                                </Nav.Link>
                                <NavDropdown title="shop">
                                    <NavbarDropdown.item href="#action/6.1">
                                            women's Tops
                                    </NavbarDropdown.item>
                                    <NavbarDropdown.item href="#action/6.1">
                                            Women's Bottoms
                                    </NavbarDropdown.item>
                                    <NavbarDropdown.item href="#action/6.1">
                                            Women's Shoes
                                    </NavbarDropdown.item>
                                    <NavDropdown.Divider></NavDropdown.Divider>
                                    <NavbarDropdown.item href="#action/6.1">
                                            Men's Tops
                                    </NavbarDropdown.item>
                                    <NavbarDropdown.item href="#action/6.1">
                                            Men's Bottoms
                                    </NavbarDropdown.item>
                                    <NavbarDropdown.item href="#action/6.1">
                                            Men's Shoes
                                    </NavbarDropdown.item>
                                </NavDropdown >
                                <Nav.Link href="Donate">
                                    Donate
                                </Nav.Link>
                                <Nav.Link href="Contact">
                                    Contact
                                </Nav.Link>
                                <Nav.Link href="Checkout">
                                    Checkout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>                  
                

            </Container>
        </Navbar>
        </>

}

export default Navbar