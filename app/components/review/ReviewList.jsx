import React from 'react';
import UserProfile from './User';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var reviews = this.props.values;
        var date = new Date().toLocaleDateString();
        
        return (
            <div>
                {reviews.map(function (item) {
                    return <div key={item._id}><UserProfile/>
                        Review -  {item.comment}
                        <p style={{ color: 'gray' }}>added on {date}</p></div>
                }) }
            </div>
        );
    }

};

export default ReviewList;