import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: []
        };

        this._onAddReviewClick = this._onAddReviewClick.bind(this);
    }

    componentDidMount() {
        var self = this;

        axios.get('api/products/' + this.props.product_id + '/reviews').then(function (response) {
            self.setState({ values: response.data });
        }).catch(function (err) {

        });
    }

    saveReview(user, comment) {
        axios.post('api/products/addreview', { comment: comment, reviewby: user }).then(function (response) {
          console.log(response.data);
        }).catch(function (err) {
           console.log(err);
        });
    }

    _onAddReviewClick(e) {
        var newReview = this.refs.review.value;
        var allReviews = this.state.values;

        allReviews.push({ comment: newReview, reviewdby: '' });
        this.setState({ values: allReviews });
        this.saveReview('mohit', newReview);

        this.refs.review.value = "";

    }

    render() {
        return (
            <div>
                <ReviewList values={this.state.values}/>
                <div className="addReview">
                <textarea ref="review" style={{ padding: 5 }} rows="10" cols="50" placeholder="Add product review"></textarea><br/>
                <button className="btn btn-primary" onClick={this._onAddReviewClick}>Add Review</button>
                </div>
            </div>
        );
    }
};

export default AddReview;
