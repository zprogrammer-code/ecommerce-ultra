import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import { Image } from 'react-bootstrap';
import Products from '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Accordian/Products.js';


class ProductPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            products: Products
        }
    }

    render(){
        const daProducts = this.state.products
        console.log(daProducts)
        return(
            <>
            {daProducts.map((product) => (
                <a href="Productpage">
            <div class='row full-height align-left-sm align-left-md align-left-lg'>
                <Image src={product.pic} fluid />;
            </div>
                </a>
             ))}
             </>
        )
    }
}


export default ProductPage;