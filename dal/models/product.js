var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	productid: Number,
	productname: String,
	price: Number,
	category: Array
});
module.exports = mongoose.model('product',productSchema);