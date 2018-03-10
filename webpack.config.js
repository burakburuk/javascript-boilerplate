const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {

        }
    },
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ]
};