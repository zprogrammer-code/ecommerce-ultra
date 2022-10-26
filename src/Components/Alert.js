import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function CovidAlert() {
    return(
        <>
            <Alert varient="dark" className="d-flex align-items-center justify-content-center" href="/HeroSection2.js">
                How we are respondoing to COVID-19
                <br/>
                    <Button type="pill">
                        Anouncement
                    </Button>
            </Alert>
        </>
    )
}

export default CovidAlert