import React from 'react';
import ProductReview from 'ProductReview';
import Search from 'Search';
import Cart from 'Cart';
import Checkout from 'Checkout';
import ProductList from 'ProductList';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Search/>
                <ProductReview/>
                <Cart/>
                <ProductList/>
            </div>
        );
    }
};

export default Dashboard;