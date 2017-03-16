let express = require('express')
let opn = require('opn')
let webpack = require('webpack')

let app = express()


let compiler = webpack({
    entry:'./src/entry.js',
    output:{
        path:'/',
        filename:'bundle.js'
    }
})

var devMiddleware = require('webpack-dev-middleware')(compiler,{})
app.use(devMiddleware)

app.listen(9999,function(){
    opn("http://localhost:9999")
    console.log("listen at localhost:9999")
})