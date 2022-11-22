import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/ecommerce-ultra/src/Components/Components.css";

 
export function CovidAlert() {
    return(
        <>
            <Alert varient="dark" href="#" className='justify-content-space-between'>
                <Container className='anouncement-content-wrapper'> 
                   <h4> we are respondoing to COVID-19</h4>
                    <Button type="pill" className='anouncementButton'>
                        Anouncement
                    </Button>
                </Container>
            </Alert>
        </>
    )
};

