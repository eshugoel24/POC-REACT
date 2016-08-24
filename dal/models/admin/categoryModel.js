var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
	categoryid: Number,
	categoryname: String
});
module.exports = mongoose.model('category',categorySchema);