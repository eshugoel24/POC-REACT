import React from 'react';
import ReactDOM from 'react-dom';
import AddProduct from './addproduct';
import ListProduct from './listproduct';
import SearchQuickFilter from './searchquickfilter';

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
    };
    _handleAddProduct(pName, pCategory, pAmount){
        this.state.listItems.push({productName: pName, productCategory: pCategory, productAmount: pAmount});
        this.orgProdArray = this.state.listItems;
        
        var groupByCategory = this._groupByCategory(this.orgProdArray);
        
        this.setState({ listItems: this.state.listItems});
        this.setState({categories: groupByCategory.allCategories});
        this.setState({categorizedItems : groupByCategory});
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
        var searchTerm = key;
        var prodArray = this.orgProdArray;
        
        var results = [];
        for (var i = 0; i < prodArray.length; i++) {
            if ((prodArray[i].productName.indexOf(searchTerm) >= 0)) {
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
                <div className="sub_container_left_box left">
                    <AddProduct addProduct={this._handleAddProduct} />
                </div>
                <div className="sub_container_right_box left">
                    <div>
                        <SearchQuickFilter onSearchCategory={this._handleSearchProduct} />
                    </div>
                    <div>
                        <ListProduct categorizedItems={this.state.categorizedItems} productCategories={this.state.categories} onDeleteItem={this._handleDeleteProduct}/>
                    </div>
                </div>
            </div>
        );
    }
    
};

//ReactDOM.render(<ProductComponent />,app);
export default ProductComponent;