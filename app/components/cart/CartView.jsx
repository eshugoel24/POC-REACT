import React from 'react';
import Product from './Product'
import CheckoutButton from './CheckoutButton'

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productNames: [] };
	}

    componentWillReceiveProps(props) {
		var newProductName = props.product;
		var cartProducts = this.state.productNames;
		cartProducts.push(newProductName);

		this.setState({ productNames: cartProducts });
	}

	_removeProductName(PC) {
        if (confirm("Are you sure you want to remove " + PC.props.productName + " from your cart?")) {
			var self = this;
            var pName = PC.props.productName;
			var pNames = this.state.productNames;

			pNames.map(function (p) {
				if (pName === p) {
					var index = pNames.indexOf(p);
					pNames.splice(index, 1);
				}
			});

			self.setState({ productNames: pNames });
        }
	}

	render() {
		var self = this;
		var productNames = this.state.productNames;

		return (
			<div id="cart" className="cartMain right">
                <h4>Your Cart</h4>
				{
					productNames.map(function (product) {
						return <Product productName={product} remove={self._removeProductName.bind(self) }/>
					})
				}
				<CheckoutButton />
			</div>
		);
	}
};

export default Cart;