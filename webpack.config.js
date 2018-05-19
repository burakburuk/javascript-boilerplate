const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        alias: {}
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
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                },
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'file-loader',
                query: {
                    name: 'assets/images/[name]-[sha512:hash:base64:7].[ext]',
                },
            },
            {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};