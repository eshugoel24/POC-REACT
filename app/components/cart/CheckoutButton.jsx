import React from 'react';
import {Link} from 'react-router';

class CheckoutButton extends React.Component {
	render() {
		return (
			<Link to="checkout"><button type="button">Checkout</button></Link>
		);
	}
};

export default CheckoutButton;