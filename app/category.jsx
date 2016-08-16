import React from 'react'
import ReactDOM from 'react-dom';
import AddCategory from './addcategory'
import ListCategory from './listcategory'

class CategoryComponent extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            listItem: []
        };
        this._handleAddCategory = this._handleAddCategory.bind(this);
    }
    
    _handleAddCategory(val){
        this.state.listItem.push(val);
        this.setState({listItem : this.state.listItem});
    };

    render(){
        return(
            <div>
                <AddCategory onAddCatClick={this._handleAddCategory} />
                <ListCategory listItem={this.state.listItem}/>
            </div>
        );
    };
};

//ReactDOM.render(<CategoryComponent />, app);
export default CategoryComponent;