import React from 'react';
import ProductReview from 'ProductReview';
import Search from 'Search';
import Cart from 'Cart';
import Checkout from 'Checkout';
import ProductList from 'ProductList';
import 'dist/stylesheets/main.css'
import PopUp from 'app/PopUpLayout';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: "" ,isPopUp:false };
        this.addProduct = this.addProduct.bind(this);
        this._showPopUp = this._showPopUp.bind(this);
    }
    _showPopUp(){
      this.setState({isPopUp:true});
    }

    addProduct(item) {
        this.setState({ product: item.productname });
    }

    render() {
      let defaultVals={
        headerText:'hello from popup!',
        contentDiv:'<div>Content Div</div>',

      };
        return (
            <div>
                <a href='#' onClick={this._showPopUp}>Show PopUp</a>
                <Search/>
                <ProductList addProduct = {this.addProduct}/>
                <ProductReview/>
                <Cart product = {this.state.product}/>
                { this.state.isPopUp ? <PopUp vals={defaultVals}/> : ''}
            </div>
        );
    }
};

export default Dashboard;
