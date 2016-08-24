import React from 'react';
import ReactDOM from 'react-dom';
import AddCategory from './addcategory';
import ListCategory from './listcategory';
import SearchQuickFilter from './searchquickfilter';
import { Link } from 'react-router';
import Axios from 'axios';

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
    }
    
    componentDidMount(){
        this._getCategories();
    };

    _handleAddCategory(val){
        // this.state.listItem.push(val);
        // this.orgCatArray = this.state.listItem;
        // this.setState({listItem : this.state.listItem});
        this._addProductCategory(val);
        this._getCategories();
    };
    _getCategories() {
        var self = this;
        Axios.get('/api/categories').then(function(response){
            if(response && response.status === STATUS_OK){
                if(response.data && response.data.length > 0){
                    var categories = [];
                    response.data.map(function(category, index){
                        categories.push(category);
                    });
                    self.orgCatArray = categories;
                    self.setState({listItem: categories});
                }
            }
        });
    };
    _addProductCategory(val) {
        
        Axios.post('/api/addprodcat', {categoryName : val}).then(function(response){
            if(response && response.status === STATUS_OK){
                if(response.data){
                    var data = response.data;
                }
            }
            else {
                alert('Error');
            }
        });
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
                <div className="sub_container_left_box left">
                    <div>
                        <AddCategory onAddCatClick={this._handleAddCategory} />
                    </div>
                    <div className="right"><Link to="/products">Back to Products</Link></div>
                </div>
                <div className="sub_container_right_box left">
                    <div>
                        <SearchQuickFilter onSearchCategory={this._handleSearchCategory} />
                    </div>
                    <div>
                        <ListCategory listItem={this.state.listItem}/>
                    </div>
                </div>
            </div>
        );
    };
};

//ReactDOM.render(<CategoryComponent />, app);
export default CategoryComponent;