let express = require('express')
let opn = require('opn')
let webpack = require('webpack')

let app = express()
app.listen(9999,function(){
    opn("http://localhost:9999")
    console.log("listen at localhost:9999")
})