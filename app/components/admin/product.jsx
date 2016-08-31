import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './addproduct';
import ListProduct from './listproduct';
import SearchQuickFilter from './searchquickfilter';
import Axios from 'axios';
import * as Api from '../../../api/adminAPI';
import Path from 'path';

class ProductComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.orgProdArray=[];
        this.allCategories=[];        
        this.state = {
            listItems : [],
            categorizedItems : [],
            uniqueCategories : [],
            processing:false
        };
        this._handleAddProduct = this._handleAddProduct.bind(this);
        this._handleSearchProduct = this._handleSearchProduct.bind(this);
        this._handleDeleteProduct = this._handleDeleteProduct.bind(this);
        this._onProductsGetSuccess = this._onProductsGetSuccess.bind(this);
        this._onCategoriesGetSuccess = this._onCategoriesGetSuccess.bind(this);
        this._onProductAddDeleteSuccess = this._onProductAddDeleteSuccess.bind(this);
    };
    
    componentDidMount() {
        this.setState({processing:true});
        var _this =this;
        setTimeout(function(){ 
            Api.getCategories(_this._onCategoriesGetSuccess);
            Api.getAllProducts(_this._onProductsGetSuccess);
        }
        , 500);
        
    }
    
    _onProductsGetSuccess(productList){
        this.setState({processing:false});
        if (productList) {
            //iterate into products
            var products = [];
            productList.map(function(product, index){
                products.push(
                {
                    productId: product._id,
                    productName: product.productname,
                    productDescription: product.productdescription,
                    productCategory: product.category,
                    productAmount: product.price
                });
            });
            this.orgProdArray = products;
            this._setProductState(products);
        }
    };

    _onCategoriesGetSuccess(categories){
        if (categories) {
            var uniqueCategories = [];
            for (var i = 0; i < categories.length; i++) {
                if (uniqueCategories.indexOf(categories[i].categoryname) === -1) {
                    uniqueCategories.push(categories[i].categoryname);
                }
            }
            this.setState({ uniqueCategories: uniqueCategories });
        }
    };

    _onProductAddDeleteSuccess(param){
        Api.getAllProducts(this._onProductsGetSuccess);
    };

    _setProductState(productList){
        var groupByCategory = this._groupByCategory(productList);
        this.setState({ listItems: productList });
        this.setState({categorizedItems : groupByCategory});
    };

    _handleAddProduct(newProduct){
        this.setState({processing:true});
        var product = {
            productName: newProduct.productName, 
            productDescription: newProduct.productDescription, 
            productCategory: newProduct.categoryName, 
            productAmount: newProduct.productAmount
        };
        try {
                Api.addProduct(product, this._onProductAddDeleteSuccess);
        }
        catch (e) {
            console.log(e);
        }
        
    };
    
    _handleDeleteProduct(productData) {
        this.setState({processing:true});
        var pId = productData.pId;
        try{
             Api.deleteProduct(pId, this._onProductAddDeleteSuccess);
        }
        catch(e){
            console.log(e);
        }
    };

    _handleSearchProduct(key){
        var searchTerm = key.toLowerCase();
        var prodArray = this.orgProdArray;
        
        var results = [];
        for (var i = 0; i < prodArray.length; i++) {
            if ((prodArray[i].productName.toLowerCase().indexOf(searchTerm) >= 0)) {
                results.push(prodArray[i]);
            }
        }
        this._setProductState(results);
    };

    _groupByCategory(prodArr) {
        var max = 0;
        var groupByCategory = {};
        this.allCategories = [];
        for (var i = prodArr.length; --i >= 0;) {
            var value = prodArr[i];

            if (groupByCategory[value.productCategory] === undefined) {
                groupByCategory[value.productCategory] = [value];
            }
            else {
                groupByCategory[value.productCategory].push(value);
            }

            if(this.allCategories.indexOf(value.productCategory) === -1){
                this.allCategories.push(value.productCategory);
            }
        }
        groupByCategory.allCategories = this.allCategories;
        return groupByCategory;
    };


    render() {
        let processIcon;
        var processImagePath= Path.join(__dirname,'/images/spinner_60.gif');
        if(this.state.processing){
            processIcon = (
            <div className="processing">
                <img src={processImagePath} href="#" />
            </div>
            );
        }
        return (
            <div>
           <div className="header"><h1>Header</h1></div>
                <div className="addProductMain col-lg-6 col-md-6 col-sm-6">
                    <AddProduct productCategories={this.state.uniqueCategories} addProduct={this._handleAddProduct} />
                </div>
                <div className="addProductListMain col-lg-6 col-md-6 col-sm-6">
                    <div>
                        <SearchQuickFilter onSearchCategory={this._handleSearchProduct} />
                    </div>
                   {processIcon} 
                    <div>
                        <ListProduct categorizedItems={this.state.categorizedItems} onDeleteItem={this._handleDeleteProduct}/>
                    </div>
                </div>
                <div className="footer"><p>&copy; Copyright 2016</p></div>
            </div>
        );
    }
    
};

//ReactDOM.render(<ProductComponent />,app);
export default ProductComponent;