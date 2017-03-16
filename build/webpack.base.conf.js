var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'/',
        filename:'bundle.js'
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue',
        }
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}