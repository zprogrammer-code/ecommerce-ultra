import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

 
export function CovidAlert() {
    return(
        <>
            <Alert varient="dark" href="#">
                <Container className='d-flex align-items-center space-between mr-5'> 
                    we are respondoing to COVID-19
                    <Button type="pill">
                        Anouncement
                    </Button>
                </Container>
            </Alert>
        </>
    )
};

