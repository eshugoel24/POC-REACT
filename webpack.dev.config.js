var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        './app/app.jsx'
    ],

    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js',
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        root: __dirname,
        alias: {
            Cart: 'app/components/cart/CartView.jsx',
            MainLayout: 'app/components/MainLayout.jsx',
            applicationStyles: 'app/styles/app.scss',
            Dashboard: 'app/components/dashboard/Dashboard.jsx',
            Products: 'app/components/admin/product.jsx',
            ProductCategory: 'app/components/admin/category.jsx',
            Checkout: 'app/components/checkout/Checkout.jsx',
            EmailSelection: 'app/components/checkout/EmailSelection.jsx',
            PaymentInfo: 'app/components/checkout/PaymentInfo.jsx',
            ProductReview: 'app/components/review/ProductReview.jsx',
            User: 'app/components/review/User.jsx',
            Search: 'app/components/admin/searchquickfilter.jsx',
            ProductList: 'app/components/product/ProductList.jsx',
            Login: 'app/components/account/Login.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.jpg$/, 
                loader: "url-loader?limit=100000"
            },
            {
            loaders: ['react-hot', 'babel-loader', 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0'],
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },

    devtool: "cheap-module-eval-source-map"
}