requre('shelljs/global')

var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var assetsPath = './dist/static/'
rm('-rf','./dist')
mkdir('-p',assetsPath)
cp('-R','static/*',assetsPath)

webpack(webpackConfig,function(err,stats){})