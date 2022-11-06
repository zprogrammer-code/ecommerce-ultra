import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

export function PageNavigation() {
    <>
<Nav aria-label="Page navigation" className="flex-end">
    <ul class="pagination">
    <li>
        <a href="Store" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        </a>
    </li>
    <li><Nav.Link href="Store">1</Nav.Link></li>
    <li><Nav.Link href="Store">2</Nav.Link></li>
    <li><Nav.Link href="Store">3</Nav.Link></li>
    <li><Nav.Link href="Store">4</Nav.Link></li>
    <li><Nav.Link href="Store">5</Nav.Link></li>
    <li>
        <a href="Store" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        </a>
    </li>
    </ul>
</Nav>
    </>
};

/*
<li><a href="Store">1</a></li>
<li><a href="Store">2</a></li>
<li><a href="Store">3</a></li>
<li><a href="Store">4</a></li>
<li><a href="Store">5</a></li>
*/