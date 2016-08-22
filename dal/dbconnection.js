exports.getDBConnection=function(){
	var mongoose = require('mongoose');
	var db =mongoose.connect('mongodb://mernpoc:mern@ds161505.mlab.com:61505/avengelist');
	return db;
};