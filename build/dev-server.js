var express = require('express')
var opn = require('opn')
var webpack = require('webpack')

var app = express()


var compiler = webpack(require('./webpack.base.conf'))

var devMiddleware = require('webpack-dev-middleware')(compiler,{})
app.use(devMiddleware)

app.listen(9999,function(){
    opn("http://localhost:9999")
    console.log("listen at localhost:9999")
})