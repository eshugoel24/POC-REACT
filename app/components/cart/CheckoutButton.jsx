import React from 'react';
import ReactDOM from 'react-dom';

class CheckoutButton extends React.Component {
	_redirect() {
    	window.location = '#/checkout';
  	}

	render() {
		return (
			<button type="button" onClick={this._redirect}>Checkout</button>
		);
	}
}

export default CheckoutButton;