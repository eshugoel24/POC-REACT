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
        var productControl = this.refs.txtAddProduct;
        var productName = productControl.value;
        var categories = this.refs.ddlCategory;
        var categoryName = categories.options[categories.selectedIndex].text;
        if(productName !== ""){
            this.props.addProduct(productName,categoryName);
            productControl.value="";
            productControl.focus();
        }
    };
    render() {
        var categories = this._getAllCategory();
        return (
            <form>
                <h1>Add Product </h1>
                <div>
                    <div>
                        Name: <input type='text' ref='txtAddProduct' placeholder='Enter product name' />
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