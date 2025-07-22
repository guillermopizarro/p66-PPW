const express = require('express')
const router = express.Router()

var app = express()
app.use( router )



let puerto = 3000
app.listen( puerto )
console.log( `Web App is listen on http://localhost:${puerto}/` )