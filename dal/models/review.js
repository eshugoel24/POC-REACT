'use strict';

var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    reviewid: Number,
    productid: Number,
    reviewdby: String,
    comment: String,
    rating: Number
});

module.exports = mongoose.model('review', reviewSchema);