import React from 'react'
import ReactDOM from 'react-dom';
import AddCategory from './addcategory'
import ListCategory from './listcategory'
import SearchQuickFilter from './searchquickfilter'

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
    
    _handleAddCategory(val){
        this.state.listItem.push(val);
        this.orgCatArray = this.state.listItem;
        this.setState({listItem : this.state.listItem});
    };

    _handleSearchCategory(key){
        var searchTerm = key;
        var catArray = this.orgCatArray;
        if(key === ""){
            this.setState({listItem: this.orgCatArray});
            return;
        }
        var results = [];
        for (var i = 0; i < catArray.length; i++) {
            if (catArray[i].indexOf(searchTerm) >= 0) {
                results.push(catArray[i]);
        }
        this.setState({listItem : results});
  }
    };
    render(){
        return(
            <div>
                <div>
                    <AddCategory onAddCatClick={this._handleAddCategory} />
                </div>
                <div>
                    <SearchQuickFilter onSearchCategory={this._handleSearchCategory} />
                </div>
                <div>
                    <ListCategory listItem={this.state.listItem}/>
                </div>
            </div>
        );
    };
};

//ReactDOM.render(<CategoryComponent />, app);
export default CategoryComponent;