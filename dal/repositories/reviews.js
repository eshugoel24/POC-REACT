'use strict';

var Review = require("../models/review");
var defaultRating = 4;

exports.getAll = function(productId, callback) {
    Review.find({
        productid: productId
    }, function(err, reviews) {
        if (err) console.log(err);
        callback(reviews);
    });
};

exports.addReview = function(productId, user, comment, callback) {
    var review = new Review({
        reviewid: 1,
        productid: productId,
        reviewdby: user,
        comment: comment,
        rating: defaultRating
    });

    review.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            callback('saved');
        }
    });

};