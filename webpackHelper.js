'use strict';

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackconfig = require('./webpack.dev.config');
const compiler = webpack(webpackconfig);

module.exports = function(app) {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackconfig.output.publicPath,
        stats: {
            colors: true,
            'errors-only': true
        }
    }));

    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));

};