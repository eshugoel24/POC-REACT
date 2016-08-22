import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product'
import CheckoutButton from './CheckoutButton'

class Cart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {productNames: this.props.productNames }
	}
	
	_removeProductName(PC) {        
        if (confirm("Are you sure you want to remove " + PC.props.productName + " from your cart?")) {		
		    var self = this;
            var pName = PC.props.productName;
		    var pNames = this.state.productNames;

		    pNames.map(function(p) {
			    if (pName === p) {
				    var index = pNames.indexOf(p);
				    pNames.splice(index, 1);
			    }
		    });
		    self.setState({productNames: pNames});
        }
	}

	render() {
		var productNames = this.state.productNames;
		var self = this;
		return (
			<div id="cart">
                <h4>Your Cart</h4>
				{
					productNames.map(function(product) {
						return <Product productName={product} remove={self._removeProductName.bind(self)}/>
					})
				}
				<CheckoutButton />
			</div>
		);
	}
}

export default Cart;