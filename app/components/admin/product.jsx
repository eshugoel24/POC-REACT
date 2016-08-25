import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './addproduct';
import ListProduct from './listproduct';
import SearchQuickFilter from './searchquickfilter';
import Axios from 'axios';

class ProductComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.orgProdArray=[];
        this.allCategories=[];        
        this.state = {
            listItems : [],
            categories : [],
            categorizedItems : []
        };
        this._handleAddProduct = this._handleAddProduct.bind(this);
        this._handleSearchProduct = this._handleSearchProduct.bind(this);
        this._handleDeleteProduct = this._handleDeleteProduct.bind(this);
        //this._loadProducts(); 
    };
    
    componentDidMount() {
        this._loadProducts();
    }
    
    _loadProducts() {
        var self = this;
        const STATUS_OK = 200;
        Axios.get('/api/products')
            .then(function (response) {
                if(response && response.status === STATUS_OK){
                    if(response.data){
                        //iterate into products
                        var productList = [];
                        response.data.map(function(product, index){
                            productList.push(
                            {
                                productName: product.productname,
                                productCategory: product.category[0],
                                productAmount: product.price
                            });
                        });
                        self.orgProdArray = productList;
                        self._setProductState(productList);
                    }
                }
                else {
                    console.log('Error');
                }
            });
    };
    _setProductState(productList){
        var groupByCategory = this._groupByCategory(productList);
        this.setState({ listItems: productList });
        this.setState({categorizedItems : groupByCategory});
        this.setState({ categories: groupByCategory.allCategories });
    };
    _handleAddProduct(pName, pCategory, pAmount){
        this.state.listItems.push({productName: pName, productCategory: pCategory, productAmount: pAmount});
        this.orgProdArray = this.state.listItems;
        
        var groupByCategory = this._groupByCategory(this.orgProdArray);
        this._setProductState(this.orgProdArray);
    };
    
    _groupByCategory(prodArr){
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

    _handleDeleteProduct(productData) {
        var pCategory = productData.pCat;
        var pName = productData.pName;
        var categorizedItems = this.state.categorizedItems;
        var categoryObj =categorizedItems[pCategory]; 
        for(var i=0; i<categoryObj.length; i++){
         if(categoryObj[i].productName.toLowerCase() === pName.toLowerCase()) {
             categoryObj.splice(i,1);
         }
        }
        this.setState({categorizedItems : categorizedItems});
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
        var groupByCategory = this._groupByCategory(results);

        this.setState({ listItems: results });
        this.setState({categories: groupByCategory.allCategories});
        this.setState({categorizedItems : groupByCategory});
    };
    render() {
        return (
            <div>
            <div className="header"><h1>Header</h1></div>
                <div className="addProductMain left">
                    <AddProduct addProduct={this._handleAddProduct} />
                </div>
                <div className="addProductListMain left">
                    <div>
                        <SearchQuickFilter onSearchCategory={this._handleSearchProduct} />
                    </div>
                    <div>
                        <ListProduct categorizedItems={this.state.categorizedItems} productCategories={this.state.categories} onDeleteItem={this._handleDeleteProduct}/>
                    </div>
                </div>
                <div className="footer"><p>&copy; Copyright 2016</p></div>
            </div>
        );
    }
    
};

//ReactDOM.render(<ProductComponent />,app);
export default ProductComponent;