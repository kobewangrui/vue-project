var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')
var path = require('path')


var webpackConfig = merge(baseWebpackConfig,{
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/bundle.js'
    }
})

// 设置node为生产模式
// IDBEnvironment.NODE_ENV = 'production'