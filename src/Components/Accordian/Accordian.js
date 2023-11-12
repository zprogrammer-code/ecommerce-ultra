
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/Accordian/Products.js';
import ProductCard from '/home/zprogrammercode/React_ecommerce_ultra/ecommerce-ultra/src/Components/Accordian/ProductList.js';





class Accordian extends React.Component {

  
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
    return( <ProductCard {...this.state} />)
    }
  
  static getDerivedStateFromProps(props, state) {
    return { ...state,
    loding: state.products.length === 0 ? props.loading :
    null,
    };
  }
}

Accordian.defaultProps = {
  loading: "loading...",
};

  export default Accordian;

