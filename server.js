var express = require('express');
var app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8989;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

var apiRouter = express.Router();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var db = require('./dal/dbconnection').getDBConnection();

/*VALIDATE USER*/
apiRouter.post('/auth',function(request,response){
	var users = require('./dal/repositories/users');
	var userName= request.body.username;
	var password = request.body.password;
	var util = require('./util');
	users.validateUser(userName,function(users){
		if(users.length>0){
			if(users[0].password===password){
				var jwtToken=util.generateJWT(users[0]);
				return response.json({token:jwtToken,success:true});
			}
			else{
				return response.json({success:false});
			}
		}
		else{
			return response.json({success:false});
		}		
	});
});
/*GET ALL PRODUCTS*/
apiRouter.get('/products',function(request,response){
	var products = require('./dal/repositories/products');
	products.getAll(function(results){
		return response.json(results);
	});
});
/*GET PRODUCT BY ID*/
apiRouter.get('/products/:id',function(request,response){
	var products = require('./dal/repositories/products');
	products.getProduct(request.params.id,function(results){
		return response.json(results);
	});
});
/*GET REVIEWS OF SPECIFIC PRODUCT*/
apiRouter.get('/products/:id/reviews',function(request,response){
	var reviews = require('./dal/repositories/reviews');
	reviews.getAll(request.params.id,function(results){
		return response.json(results);
	});
});
app.use('/api',apiRouter);
app.listen(PORT, function () {
  console.log('Express server is up and running on port ' + PORT);
});
