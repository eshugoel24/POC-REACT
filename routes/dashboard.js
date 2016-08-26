'use strict';

var path = require('path');

//Get all reviews of specific product 
exports.productAllReviews = function(request, response) {
    var reviews = require(path.join(__dirname, '../dal/repositories/reviews'));
    reviews.getAll(request.params.id, function(results) {
        return response.json(results);
    });
};

//Add product review
exports.addProductReview = function(request, response) {
    var reviews = require(path.join(__dirname, '../dal/repositories/reviews'));
    var comment = request.body['comment'];
    var reviewBy = request.body['reviewby'];

    reviews.addReview(1, reviewBy, comment, function(results) {
        return response.json(results);
    });
};