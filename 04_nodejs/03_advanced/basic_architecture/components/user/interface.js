const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const routes = express.Router()

routes.get('/', function(req, res){
    controller.getUser( req.body )
        .then( (data) => response.success( req, res, data, 200 ) )
        .catch( (data) => response.error( req, res, data, 500 ) )
})

routes.post('/', function(req, res){
    controller.addUser( req.body )
        .then( (data) => response.success( req, res, data, 200 ) )
        .catch( (data) => response.error( req, res, data, 500 ) )
})

routes.put('/', function(req, res){
    controller.updateUser( req.body )
        .then( (data) => response.success( req, res, data, 200 ) )
        .catch( (data) => response.error( req, res, data, 500 ) )
})

routes.delete('/', function(req, res){
    controller.deleteUser( req.body )
        .then( (data) => response.success( req, res, data, 200 ) )
        .catch( (data) => response.error( req, res, data, 500 ) )
})

module.exports = routes