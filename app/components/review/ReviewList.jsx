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
                <ul>
                    {reviews.map(function (item) {
                        return <li key={item._id}><UserProfile/>
                            Review -  {item.comment}
                            <p style={{ color: 'gray' }}>added on {date}</p></li>
                    }) }

                </ul>
            </div>
        );
    }

};

export default ReviewList;