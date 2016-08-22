import React from 'react';

class CheckoutButton extends React.Component {
	_redirect() {
    	window.location = '#/checkout';
  	}

	render() {
		return (
			<button type="button" onClick={this._redirect}>Checkout</button>
		);
	}
};

export default CheckoutButton;