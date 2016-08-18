import React from 'react';
import ReactDOM from 'react-dom';

class ListProduct extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleDeleteItem = this._handleDeleteItem.bind(this);
    };
    _handleDeleteItem(pName,pCategory) {
        this.props.onDeleteItem(pCategory, pName);
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
                                <ProductMeta childItems={items[category]} notifyDelete={self._handleDeleteItem(category)} />
                            </div>
                        )

                    })
                    
                }
            </div>
        );
    }

};

class ProductMeta extends React.Component {
    constructor(props, context) {
        super(props, context);
        this._handleDeleteItem = this._handleDeleteItem.bind(this);
    };
    _handleDeleteItem(pName) {
        this.props.notifyDelete(pName);
    }
    
    render() {
        var self = this;
        var items = this.props.childItems;
        return (
            <div>
                {
                    items.map(function(item, i) {
                    return (
                        <div className="prod_list_name_amt_wrapper left">
                            <div className="prod_list_name left" key={i + 1}>{item.productName}</div>
                            <div className="prod_list_amt left" key={i + 2}>Rs.{item.productAmount}</div>
                            <div className="prod_list_item_del left" key={i + 3}>
                               <a> X </a>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        );
    }
};

export default ListProduct;