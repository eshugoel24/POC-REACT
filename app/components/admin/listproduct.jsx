import React from 'react';
import ReactDOM from 'react-dom';

class ListProduct extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleDeleteItem = this._handleDeleteItem.bind(this);
    };
    _handleDeleteItem(pData) {
        this.props.onDeleteItem(pData);
    };
    render() {
        var self = this;
        var items = this.props.categorizedItems;
        var categories = this.props.productCategories;
        return (
            <div>
                {
                    categories.map(function(category, i){
                    return (
                            <div>
                                <label key={i}>{category}</label>        
                                <ProductMeta key={category} category={category} childItems={items[category]} notifyDelete={self._handleDeleteItem} {...this.props} />
                            </div>
                        )

                    }, this)
                    
                }
            </div>
        );
    }

};

class ProductMeta extends React.Component {
    constructor(props, context) {
        super(props, context);
        //this._handleDeleteItem = this._handleDeleteItem.bind(this);
    };
    _handleDeleteItem(pData) {
        this.props.notifyDelete(pData);
    }
    
    render() {
        var self = this;
        var items = this.props.childItems;
        var category = this.props.category;
        return (
            <div>
                {
                    items.map(function(item, i) {
                    return (
                        <ul className="">
                            <li key={i + 1}>{item.productName}</li>
                            <li key={i + 2}>Rs.{item.productAmount}</li>
                            <li key={i + 3}>
                               <a href="javascript:void(0);" onClick={this._handleDeleteItem.bind(this, {pName: item.productName,pCat:category})}> X </a>
                            </li>
                        </ul>
                    )
                    },this)
                }
            </div>
        );
    }
};

export default ListProduct;