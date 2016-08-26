import React from 'react';
import ProductReview from 'ProductReview';
import Search from 'Search';
import Cart from 'Cart';
import Checkout from 'Checkout';
import ProductList from 'ProductList';

import 'dist/stylesheets/main.css'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: "" };
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct(item) {
        this.setState({ product: item.productname });
    }

    render() {
        return (
            <div>
                <Search/>
                <ProductList addProduct = {this.addProduct}/>
                <ProductReview/>
                <Cart product = {this.state.product}/>
            </div>
        );
    }
};

export default Dashboard;