import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css";

 
function CovidAlert() {
    return(
        <>
            <Alert varient="dark" href="#" className=" alert block-example border border-0 border-dark" >
                <Container className='anouncement-content-wrapper'> 
                   <h4 className='alert-content-padding'> we are respondoing to COVID-19</h4>
                    <Button type="pill" >
                        Anouncement
                    </Button>
                </Container>
            </Alert>
        </>
    )
};

export default CovidAlert