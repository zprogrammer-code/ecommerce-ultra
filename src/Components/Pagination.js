import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export function PageNavigation() {
    return(<>
<Nav aria-label="Page navigation" className="flex-center pagination-container">
    <ul class="pagination">
    <Button variant='light'>
        <a href="Store" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
    </Button>
    <Button variant='light'><Nav.Link href="Home">1</Nav.Link></Button>
    <Button variant='light'><Nav.Link href="Store">2</Nav.Link></Button>
    <Button variant='light'><Nav.Link href="Store">3</Nav.Link></Button>
    <Button variant='light'><Nav.Link href="Donate">4</Nav.Link></Button>
    <Button variant='light'><Nav.Link href="Contact">5</Nav.Link></Button>
    <Button variant='light'>
        <a href="Checkout" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </a>
    </Button>
    </ul>
</Nav>
    </>);
};

/*
<li><a href="Store">1</a></li>
<li><a href="Store">2</a></li>
<li><a href="Store">3</a></li>
<li><a href="Store">4</a></li>
<li><a href="Store">5</a></li>
*/