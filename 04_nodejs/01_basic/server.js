const express = require('express')
const router = express.Router()

var app = express()
app.use( router )

router.get('/', function (req, res){
    res.send('Hola desde GET.')
})

router.post('/', function (req, res){
    res.send('Hola desde POST.')    
})

let puerto = 3000
app.listen( puerto )
console.log( `Web App is listen on http://localhost:${puerto}/` )