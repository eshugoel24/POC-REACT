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

Product.defaultProps = {productName: 'No Product'}

export default Product;