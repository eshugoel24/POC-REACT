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

    componentWillReceiveProps() {
        this.setState({ items: this.props.items });
    }

    render() {
        return (
            <div className="productMain left">
                {
                    this.state.items.map(function (item) {
                        return (<div key={item.productid}>{item.productname}
                            <p>Rs.{item.price}</p>
                        </div>)
                    })
                }
            </div>
        );
    }
};

export default ProductList;