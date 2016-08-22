var mongoose = require('mongoose');
var reviewSchema = new mongoose.Schema({
	reviewid:Number,
	productid: Number,
	reviewdby: Number,
	comment: String,
	rating: Number
});
module.exports = mongoose.model('review',reviewSchema);