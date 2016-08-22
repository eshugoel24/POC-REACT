import React from 'react';
import UserProfile from './User';

class ReviewBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <AddReview product_id={0}/>
            </div>
        );
    }
};

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
                    return <div><UserProfile/>
                        Review -  {item.review}
                        <p style={{ color: 'gray' }}>added on {date}</p></div>
                }) }
            </div>
        );
    }

};

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };

        this._onAddReviewClick = this._onAddReviewClick.bind(this);
    }

    componentOnMount() {
        /* TODO: load initial reviews from server using this.props.product_id */
    }

    _onAddReviewClick(e) {
        var newReview = this.refs.review.value;
        var allReviews = this.state.values;

        allReviews.push({ review: newReview, user: '' });
        this.setState({ values: allReviews });

        this.refs.review.value = "";
    }

    render() {
        return (
            <div>
                <ReviewList values={this.state.values}/>
                <textarea ref="review" style={{ padding: 5 }} row="10" cols="50" placeholder="Add product review"></textarea><br/>
                <button onClick={this._onAddReviewClick}>Add Review</button>
            </div>
        );
    }
};

export default ReviewBox;