exports.getAll=function(productId,callback){
	var reviews = require("../models/review");
	reviews.find({productid:productId},function(err,reviews){
		if(err) console.log(err);
		callback(reviews);
	});
};