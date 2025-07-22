const express = require('express')
const body_parser = require('body-parser')
const router = express.Router()

var app = express()

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    console.log( req.headers )
    res.header({
        'custom-header':'valor-personalizado'
    })
    res.send( 'Lista de mensajes' )
})

router.post('/', function(req, res) {
    res.send('Hola desde POST.')
})

router.delete('/mensaje', function(req, res) {
    console.log( req.query )
    console.log( req.body )
    res.send( 'Mensaje eliminado: ' + req.body.texto1 + ' ' + req.body.texto2 )
})

router.put('/', function(req, res) {
    res.send('Hola desde PUT.')
})

router.patch('/', function(req, res) {
    res.send('Hola desde PATCH.')
})

let puerto = 3000
app.listen( puerto )
console.log( `Web App is listen on http://localhost:${puerto}/` )