var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');

var frontend = {
    devtool: debug ? 'inline-sourcemap' : null,
    entry: path.join(__dirname, 'frontend','index.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'frontend-bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js/, loader: 'babel-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};

module.exports = [frontend];