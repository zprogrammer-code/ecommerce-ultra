import React from 'react';
import Alert from 'react-bootstrap/Alert'; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css";

 
function CovidAlert() {
    return(
        <>
            <Alert varient="dark" href="#" className=" alert" >
            <div className='logo-box'>
                    <img src='https://res.cloudinary.com/dlnshpfdv/image/upload/v1705429588/imageedit_7_7124736957_lllwdj.png' alt='logo' className='favicon'/>
                </div>
                <div className='anouncement-content-wrapper'> 
                   <h4 className='alert-content-padding'> we are respondoing to COVID-19
                    <Button className='btn-alert' type="pill" >
                        Anouncement
                    </Button>
                    </h4>
                </div>
            </Alert>
        </>
    )
};

export default CovidAlert