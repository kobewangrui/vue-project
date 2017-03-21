var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.conf')
// webpack-merge用于合并文件
var merge = require('webpack-merge')
var path = require('path')


var webpackConfig = merge(baseWebpackConfig,{
    output:{
        // ———dirname：存当前文件夹的根目录
        path:path.resolve(__dirname,'../dist'),
        filename:'js/bundle.js'
    }
})
module.exports = webpackConfig