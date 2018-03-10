const express = require('express');
var app = express();
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const open = require('open');

const compiler = webpack(config);
const port = 3007;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function (error) {
    if(error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});