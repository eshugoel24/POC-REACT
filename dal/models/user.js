var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
	userid: Number,
	username: String,
	usertype: Number,
	email: String,
	firstname: String,
	lastname: String,
	password: String,
	active: Number
});
module.exports=mongoose.model('user',userSchema);