var mongoose = require('mongoose');
var productSchema = new mongoose.Schema({
	productname: String,
	productdescription: String,
	price: Number,
	category: String
});
module.exports = mongoose.model('product',productSchema);