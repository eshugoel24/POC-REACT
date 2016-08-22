import React from 'react';
import ProductReview from '../review/ProductReview';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                Dashboard
                <ProductReview/>
            </div>
        );
    }
};

export default Dashboard;