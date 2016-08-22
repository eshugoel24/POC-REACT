import React from 'react';
import ProductReview from 'ProductReview';
import Search from 'Search';
import Cart from 'Cart';
import Checkout from 'Checkout';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Dashboard
                <Search/>
                <ProductReview/>
                <Cart/>
            </div>
        );
    }
};

export default Dashboard;