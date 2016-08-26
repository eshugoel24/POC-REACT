import React from 'react';
import axios from 'axios'

class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { items: [] };
    }

    componentDidMount() {
        var self = this;

        axios.get('api/products').then(function (response) {
            self.setState({ items: response.data });
        }).catch(function (err) {

        });
    }

    _addProductOnClick(item) {
        this.props.addProduct(item);
    }

    render() {
        var self = this;
        
        return (
            <div className="productMain left">
                <ul>
                    {
                        self.state.items.map(function (item) {
                            return (<li key={item.productid}>{item.productname}
                                <p>Rs.{item.price}</p>
                                <p><button onClick={self._addProductOnClick.bind(self, item) } className='btn-primary'>Add</button></p>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
};

export default ProductList;