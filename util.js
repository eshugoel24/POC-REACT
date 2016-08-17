var secretKey="eb8c7345eabe43c39d3e05bff31153b7"
exports.generateJWT=function(user){
	var jwt = require('jsonwebtoken');
	var authToken=jwt.sign(user,secretKey,{
		'expiresIn': 1440
	});
	return authToken;
};