requre('shelljs/global')

var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var assetsPath = './dist/static/'
//删除老的dist文件夹
rm('-rf','./dist')
// 生成新的dist
mkdir('-p',assetsPath)
// cope生成dist到static
cp('-R','static/*',assetsPath)

webpack(webpackConfig,function(err,stats){})