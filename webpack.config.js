var webpack = require('webpack');
module.exports = {
    entry: [
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [

    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
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
                test: /\.css$/, loader: 'style!css' 
            },
            {
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}