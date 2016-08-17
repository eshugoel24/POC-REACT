exports.getAll=function(callback){
	var product = require('../models/product');
	product.find({},function(err,products){
		if(err) return console.error(err);
		callback(products);
	});
};
exports.getProduct=function(id,callback){
	var product = require('../models/product');
	product.find({productid:id},function(err,products){
		if(err) return console.error(err);
		callback(products);
	});
};