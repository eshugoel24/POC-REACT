var mongoose = require('mongoose');

mongoose.connect('mongodb://mernpoc:mern@ds161505.mlab.com:61505/avengelist');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("We are connected");
});


