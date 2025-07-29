exports.success = function(req, res, data, status) {
    res.status(status).send( {error:'', body: data} )
}

exports.error = function(req, res, data, status) {
    res.status(status).send( {error:data, body: ''} )
}