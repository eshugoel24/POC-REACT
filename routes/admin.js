var path =require('path');

//Get all products
exports.allProducts = function(request, response){
    var products = require(path.join(__dirname, '../dal/repositories/products'));
    products.getAll(function(results) {
        return response.json(results);
    });
};

//Get product by id
exports.getProductById = function(request, response){
    var products = require(path.join(__dirname, '../dal/repositories/products'));
    products.getProduct(request.params.id, function(results) {
        return response.json(results);
    });
};