import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './addproduct';
import ListProduct from './listproduct';

class ProductComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            listItems : []
        };
        this._handleAddProduct = this._handleAddProduct.bind(this);
    };
    _handleAddProduct(pName, pCategory){
        this.state.listItems.push({productName: pName, productCategory: pCategory});
         console.log(this.state.listItems);
        this.setState({ listItems: this.state.listItems});
    };
    render() {
        return (
            <div>
                <div>
                    <AddProduct addProduct={this._handleAddProduct} />
                </div>
                <div>
                    <ListProduct listItem={this.state.listItems} />
                </div>
            </div>
        );
    }
    
};

//ReactDOM.render(<ProductComponent />,app);
export default ProductComponent;