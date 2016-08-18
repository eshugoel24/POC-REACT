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
                                <div className="prod_list_category left" key={i}>{category}</div>        
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
                        <div className="prod_list_name_amt_wrapper left">
                            <div className="prod_list_name left" key={i + 1}>{item.productName}</div>
                            <div className="prod_list_amt left" key={i + 2}>Rs.{item.productAmount}</div>
                            <div className="prod_list_item_del left" key={i + 3}>
                               <a  onClick={this._handleDeleteItem.bind(this, {pName: item.productName,pCat:category})}> X </a>
                            </div>
                        </div>
                    )
                    },this)
                }
            </div>
        );
    }
};

export default ListProduct;