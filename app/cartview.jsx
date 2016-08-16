import React from 'react';

class Product extends React.Component {

	constructor(props) {
		super(props);
	}

	_remove() {
		alert("Are you sure you want to remove this product from your cart?");

	}

	render() {
		var productName = this.props.productName;
		return (
			<div id={productName}>
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
	}
	
	render() {
		var productNames = this.props.productNames;
		return (
			<div id="cart">
				{
					productNames.map(function(product) {
						return <Product productName={product} />
					})
				}
				<CheckoutButton />
			</div>
		);
	}
}

Cart.defaultProps = {productNames: ['Casio Protrek', 'Casio Edifice']};

export default Cart;