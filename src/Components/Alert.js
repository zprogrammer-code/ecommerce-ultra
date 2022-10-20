import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

 
function Alert() {
    return(
        <>
            <Alert varient="dark">
                How we are respondoing to COVID-19
                    <Button type="pill">
                        Anouncement
                    </Button>
            </Alert>
        </>
    )
}

export default Alert