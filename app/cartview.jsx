import React from 'react';
import ReactDOM from 'react-dom';

class Product extends React.Component {

	constructor(props) {
		super(props);
	}

	_remove() {
		if (typeof this.props.remove === 'function') {
			this.props.remove(this);
		}
	}

	render() {
		var productName = this.props.productName;
		return (
			<div id="productInCart">
				<input type="text" value={productName}/>
				<button type="button" onClick={this._remove.bind(this)}>Remove</button>
			</div>
		);
	}
}

Product.defaultProps = {productName: 'haluwa hai kya?'}


class CheckoutButton extends React.Component {
	render() {
		return (
			<button type="button">Checkout</button>
		);
	}
}

class Cart extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {productNames: this.props.productNames }
	}
	
	_removeProductName(PC) {
		alert("Are you sure you want to remove " + PC.props.productName + " from your cart?")
		
		var pName = PC.props.productName;
		var pNames = this.state.productNames;
		var self = this;

		pNames.map(function(p) {
			if (pName === p) {
				var index = pNames.indexOf(p);
				pNames.splice(index, 1);
			}
		});
		self.setState({productNames: pNames});
	}

	render() {
		var productNames = this.state.productNames;
		var self = this;
		return (
			<div id="cart">
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