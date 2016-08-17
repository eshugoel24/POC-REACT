import React from 'react';
import ReactDOM from 'react-dom';

class ListProduct extends React.Component {
    constructor(props, context) {
        super(props, context);

    };
    render() {
        var items = this.props.listItem;
        return (
            <div>
                <ul>
                {
                    items.map(function(item, i) {
                    return <li key={i}>{item.productName} - {item.productCategory}</li>
                    })
                }
                </ul>
            </div>
        );
    }

};
export default ListProduct;