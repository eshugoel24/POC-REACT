import React from 'react';
import ReactDOM from 'react-dom';


class AddCategory extends React.Component{
constructor(props){
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
};
_handleAdd(e){
    e.preventDefault(); 
    var txtAddCat = this.refs.txtAddCat;
    var catVal = txtAddCat.value;
    if(catVal !== ''){
        this.props.onAddCatClick(catVal);
        txtAddCat.value="";
        txtAddCat.focus();
    }
}
render(){
    return(
    <form onSubmit={this._handleAdd}> 
        <div>
            <h1>Add Categories</h1>
            <input type='text' placeholder='Add a new category' ref='txtAddCat' />
            <button id='btnAddCategory' onClick={this._handleAdd}> Add</button>
        </div>
    </form>
    )
};


};

export default AddCategory;
//ReactDOM.render(<AddCategory />, app);

