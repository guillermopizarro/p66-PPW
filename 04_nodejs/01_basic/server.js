const express = require('express')

var app = express()

app.use('/', function(req, res) {
    res.send('Hola mundo.')
})

let puerto = 3000
app.listen( puerto )
console.log( `Web App is listen on http://localhost:${puerto}/` )