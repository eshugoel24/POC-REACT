import React from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './addcategory';
import ListCategory from './listcategory';
import SearchQuickFilter from './searchquickfilter';
import { Link } from 'react-router';
import * as Api from '../../../api/adminAPI';

const STATUS_OK = 200;

class CategoryComponent extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.orgCatArray = [];
        this.state={
            listItem: []
        };
        this._handleAddCategory = this._handleAddCategory.bind(this);
        this._handleSearchCategory = this._handleSearchCategory.bind(this);
        this._onCategoriesGetSuccess = this._onCategoriesGetSuccess.bind(this);
    }

    _onCategoriesGetSuccess(categoryList){
        if (categoryList) {
            var categories = [];
            categoryList.map(function (category, index) {
                categories.push(category);
            });
            this.orgCatArray = categories;
            this.setState({ listItem: categories });
        }        
    }
    
    componentDidMount(){
        Api.getCategories(this._onCategoriesGetSuccess);
    };

    _handleAddCategory(val){
        Api.addCategory(val);
        Api.getCategories(this._onCategoriesGetSuccess);
    };
    
    _handleSearchCategory(key){
        var searchTerm = key.toLowerCase();
        var catArray = this.orgCatArray;
        if(key === ""){
            this.setState({listItem: this.orgCatArray});
            return;
        }
        var results = [];
        for (var i = 0; i < catArray.length; i++) {
            if (catArray[i].categoryname.toLowerCase().indexOf(searchTerm) >= 0) {
                results.push(catArray[i]);
        }
        this.setState({listItem : results});
  }
    };
    render(){
        return(
            <div>
                <div className="header"><h1>Header</h1></div>
                <div className="addProductMain left">
                    <div>
                        <AddCategory onAddCatClick={this._handleAddCategory} />
                    </div>
                    <div><Link to="/products">Back to Products</Link></div>
                </div>
                <div className="addProductListMain left">
                    <div>
                        <SearchQuickFilter onSearchCategory={this._handleSearchCategory} />
                    </div>
                    <div>
                        <ListCategory listItem={this.state.listItem}/>
                    </div>
                </div>
                <div className="footer"><p>&copy; Copyright 2016</p></div>
            </div>
        );
    };
};

//ReactDOM.render(<CategoryComponent />, app);
export default CategoryComponent;