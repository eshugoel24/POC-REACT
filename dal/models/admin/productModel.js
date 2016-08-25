var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	productname: String,
	price: Number,
	category: String
});
module.exports = mongoose.model('product',productSchema);