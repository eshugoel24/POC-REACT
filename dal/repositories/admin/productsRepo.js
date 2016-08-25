//Get all products
exports.getAllProduct=function(callback){
	var product = require('../../models/admin/productModel');
	product.find({},function(err,products){
		if(err) return console.error(err);
		callback(products);
	});
};

//Get specific product
exports.getProduct=function(id,callback){
	var product = require('../../models/admin/productModel');
	product.find({productid:id},function(err,products){
		if(err) return console.error(err);
		callback(products);
	});
};

//Add product category
exports.addProductCategory=function(categoryname, callback){
	var Category = require('../../models/admin/categoryModel');
	var productCategory = new Category( {
		categoryname:categoryname
	});
	productCategory.save();
};

//Get all categories
exports.getAllCategories=function(callback){
	var category = require('../../models/admin/categoryModel');
	category.find({},function(err,categories){
		if(err) return console.error(err);
		callback(categories);
	});
};