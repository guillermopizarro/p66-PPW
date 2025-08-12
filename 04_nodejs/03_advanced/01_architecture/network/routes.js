const user = require('../components/user/interface')
const city = require('../components/city/interface')
const country = require('../components/country/interface')
const client = require('../components/client/interface')

const routes = function( server ) {
    server.use('/user', user)
    server.use('/city', city)
    server.use('/country', country)
    server.use('/client', client)
}

module.exports = routes