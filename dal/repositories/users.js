exports.validateUser=function(userName,callback){
	var users = require('../models/user');
	users.find({username:userName},function(err,results){
		if(err) console.error(err);
		callback(results);
	});
};