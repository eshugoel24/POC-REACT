import React from 'react';
import ReactDOM from 'react-dom';

class AddProduct extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleProductClick = this._handleProductClick.bind(this);
    };
    _getAllCategory() {
        var categories = ["Mobile", "Apparels", "Electronics"];
        return categories;
    };
    _handleProductClick(e){
         e.preventDefault(); 
        var productNameControl = this.refs.txtProductName;
        var productAmountControl = this.refs.txtProductAmount;
        var productCategoryControl = this.refs.ddlCategory;
        var productName = productNameControl.value;
        var categoryName = productCategoryControl.options[productCategoryControl.selectedIndex].text;
        var productAmount = productAmountControl.value;
        if(productName !== ""){
            this.props.addProduct(productName,categoryName, productAmount);
            productNameControl.value="";
            productAmountControl.value="";
            productNameControl.focus();
        }
    };
    render() {
        var categories = this._getAllCategory();
        return (
            <form>
                <h1>Add Product </h1>
                <div>
                    <div>
                        Name: <input type='text' ref='txtProductName' placeholder='Enter product name' />
                    </div>
                    <div>
                        Category:
                        <select name="" ref='ddlCategory'>
                            <option value=""></option>
                            {
                                categories.map(function (item, i) {
                                    return <option value={i} key={i}>{item}</option>
                                })
                            }

                        </select>
                    </div>
                    <div>
                        Amount: <input type='number' placeholder='Enter amount' ref='txtProductAmount'/>
                    </div>
                </div>

                <div>
                    <button onClick={this._handleProductClick}>Add</button>
                </div>
            </form>
        );
    }

};

//ReactDOM.render(<AddProduct />, app);
export default AddProduct;