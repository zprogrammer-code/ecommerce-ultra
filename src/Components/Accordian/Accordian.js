
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/Accordian/Products.js';
import ProductCard from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/Accordian/ProductList.js';





class Accordian extends React.Component {
  products = [
    {id: 0, name: "nike shox", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
    {id: 1, name: "nike jordan", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
    {id: 2, name: "nike running", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" },
    {id: 3, name: "nike chilling", summary: "premiere classic look and model. PRICE: $125", pic: "holder.js/100px160" }
]


    state = {
      error: null,
      loading: "loading...",
      products: [],
    };

    componentDidMount() {
      Products().then(
        (result) => {
          this.setState({
            loading: null,
            error: null,
            products: result.products,
          });
        },
        (error) => {
          this.setState({ loading: null, error });
        }
      );
    }

  render(){ 
  

    return(
    
              <ProductCard {...this.state} />
            
     
    );
      
    
  }};

  export default Accordian;

