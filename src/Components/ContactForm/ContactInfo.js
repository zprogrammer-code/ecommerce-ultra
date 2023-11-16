import React from 'react';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

function ContactInfo() {
    return(
        <>
        <Container className='contactContainer'>
       <h1 className='contact-title'> My info Dawg ! </h1>
       <ul className='contactContainer'>
        <li>Phone: 719-338-4333</li>
        <li>Email: Zprogrammercode@gmail.com</li>
        <li>Github: zprogrammer-code</li>
        </ul>
        </Container>
        <Container>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={10} />
      </Form.Group>
    </Form>
    <Button as="input" type="submit" value="Submit" />{' '}
    </Container>
        </>
    );
};

export default ContactInfo