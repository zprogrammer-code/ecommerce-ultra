import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function CovidAlert() {
    return(
        <>
            <Alert varient="dark" className="d-flex align-items-center justify-content-center" href="#">
                <Container className='mr-5'> we are respondoing to COVID-19 </Container>
                    <Button type="pill">
                        Anouncement
                    </Button>
            </Alert>
        </>
    )
}

export default CovidAlert