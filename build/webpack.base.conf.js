var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'/',
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}