var express = require('express');
var loginRoute = require('./routes/login');
var adminRoute = require('./routes/admin');
var dashboardRoute = require('./routes/dashboard');

var app = express();
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 8989;

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

var apiRouter = express.Router();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var db = require('./dal/dbconnection').getDBConnection();
app.use(express.static('public'));

// Validate user
apiRouter.post('/auth', loginRoute.authenticate);
//Get all products
apiRouter.get('/products', adminRoute.getAllProducts);
//Add product category
apiRouter.post ('/addprodcat', adminRoute.addProductCategory);
//Add a product
apiRouter.post ('/addproduct', adminRoute.addProduct);
//Get all category
apiRouter.get('/categories', adminRoute.getAllCategories);
//Get product by id
apiRouter.get('/products/:id', adminRoute.getProductById);
//Get all reviews of specific product
apiRouter.get('/products/:id/reviews', dashboardRoute.productAllReviews);
//Add product review
apiRouter.post('/products/addreview', dashboardRoute.addProductReview);

app.use('/api', apiRouter);
app.listen(PORT, function() {
    console.log('Express server is up and running on port ' + PORT);
});