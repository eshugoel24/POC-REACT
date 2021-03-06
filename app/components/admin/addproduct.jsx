import React from 'react';
import ReactDOM from 'react-dom';
//import FileUpload from './fileupload';

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
                <h4>Manage Product </h4>
                <div>
                    <div>
                        <div>
                            <label> Name: </label>
                        </div>
                        <div>
                            <input type='text' ref='txtProductName' placeholder='Enter product name' />
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
                    </div>
                    <div>
                        <div>
                            <label> Amount: </label>
                        </div>
                        <div>
                            <input type='number' placeholder='Enter amount' ref='txtProductAmount' value='100'/>
                        </div>
                    </div>
                    <div> 
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