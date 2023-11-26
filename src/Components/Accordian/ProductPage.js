import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/home/zprogrammercode/React_ecommerce_ultra2/ecommerce-ultra/src/Components/Components.css';
import { useParams } from 'react-router-dom';


const ProductPage = (props) => { 
    const {id: productId} = useParams();
    const [products, setProducts] = useState({})
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedQuanity, setSelectedQuanity] = useState(1);

    const handleQuanityChange = ({target:{value}}) => {
        setSelectedQuanity(value)
    }
  console.log(this.state);
            this.state = {
                product: this.props.location.query.products
            }
        
            console.log(this.state);
        
      
        return (
          <div>
       <h1>working</h1>
          </div>
        )
        }



export default ProductPage;
