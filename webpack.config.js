var webpack = require('webpack');
module.exports = {
    entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
		  '$': 'jquery',
		  'jQuery': 'jquery'
		})
	],
	output: {
        path: __dirname,
        filename: './public/bundel.js'
    },
    resolve: {
        root: __dirname,
        alias: {
          Cart: 'app/cart/CartView.jsx',
          MainLayout: 'app/components/MainLayout.jsx',
			applicationStyles: 'app/styles/app.scss',
			Dashboard: 'app/components/dashboard/Dashboard.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
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
