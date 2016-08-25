var path =require('path');

//Get all products
exports.getAllProducts = function(request, response){
    var products = require(path.join(__dirname, '../dal/repositories/admin/productsRepo'));
        products.getAllProduct(function(results) {
            return response.json(results);
        });
};

//Get product by id
exports.getProductById = function(request, response){
    var products = require(path.join(__dirname, '../dal/repositories/admin/productsRepo'));
        products.getProduct(request.params.id, function(results) {
            return response.json(results);
        });
};

//Add a category
exports.addProductCategory = function(request, response) {
    var productCategory = require(path.join(__dirname, '../dal/repositories/admin/productsRepo'));
    var categoryname= request.body['categoryName'];
        console.log(categoryname);
        productCategory.addProductCategory(categoryname, function(result){
            return response.json(results);
        });
};

//Get all categories
exports.getAllCategories = function(request,response){
    var productCategory = require(path.join(__dirname, '../dal/repositories/admin/productsRepo'));
        productCategory.getAllCategories(function(results) {
        return response.json(results);
    });
};

//Add a product
exports.addProduct = function(request,response){
    var productRepo = require(path.join(__dirname, '../dal/repositories/admin/productsRepo'));
    var product= {
        productName:request.body['productName'],
        amount:request.body['productAmount'],
        category:request.body['productCategory']
    };
    productRepo.addProduct(product,function(result){
        return response.json(result);
    });
};