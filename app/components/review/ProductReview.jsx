import React from 'react';
import AddReview from './AddReview';

class ProductReview extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="reviewMain left">
                <AddReview product_id={1}/>
            </div>
        );
    }
};

export default ProductReview;