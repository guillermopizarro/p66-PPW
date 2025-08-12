const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res){
    let data = 'Hola mundo' 
    response.success(req, res, data, 200)
})

routes.post('/', function(req, res){
})

routes.put('/', function(req, res){
})

routes.delete('/', function(req, res){
})

module.exports = routes