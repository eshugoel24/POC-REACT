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
    }

    render() {
        return (
            <div>
                <Search />
                <ProductList/>
                <ProductReview/>
                <Cart/>
            </div>
        );
    }
};

export default Dashboard;