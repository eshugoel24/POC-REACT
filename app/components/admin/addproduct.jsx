import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
//import FileUpload from './fileupload';

class AddProduct extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleProductClick = this._handleProductClick.bind(this);
    };
    _getAllCategory() {
        var categories = this.props.productCategories;
        return categories;
    };
    _handleProductClick(e){
         e.preventDefault(); 
        var productNameControl = this.refs.txtProductName;
        var productDescriptionControl = this.refs.txtProductDescription;
        var productAmountControl = this.refs.txtProductAmount;
        var productCategoryControl = this.refs.ddlCategory;
        var productName = productNameControl.value;
        var productDescription = productDescriptionControl.value;
        var categoryName = productCategoryControl.options[productCategoryControl.selectedIndex].text;
        var productAmount = productAmountControl.value;
        if(productName !== "" && productAmount !== ""){
            var product = {
                productName:productName,
                productDescription:productDescription,
                categoryName:categoryName,
                productAmount:productAmount
            };
            this.props.addProduct(product);
            productNameControl.value="";
            productDescriptionControl.value="";
            productAmountControl.value="";
            productNameControl.focus();
        }
    };
    render() {
        var categories = this._getAllCategory();
        return (
            <form>
                <h2>Add Product </h2>
                <div>
                    <div>
                        <div>
                            <label> Name: </label>
                        </div>
                        <div>
                            <input type='text' ref='txtProductName' placeholder='Enter product name here...' />
                        </div>
                    </div>
                     <div>
                        <div>
                            <label> Description: </label>
                        </div>
                        <div>
                            <input type='text' ref='txtProductDescription' placeholder='Enter description here...' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Category: </label>
                        </div>
                        <div>
                            <select name="" ref='ddlCategory'>
                                {
                                    categories.map(function (item, i) {
                                        return <option value={i} key={i}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div> <Link to="/category"> Add Category </Link></div>
                    </div>
                    <div>
                        <div>
                            <label> Amount: </label>
                        </div>
                        <div>
                            <input type='text' placeholder='Enter amount' ref='txtProductAmount' />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="btn-primary" onClick={this._handleProductClick}>Add</button>
                </div>
            </form>
        );
    }

};

export default AddProduct;