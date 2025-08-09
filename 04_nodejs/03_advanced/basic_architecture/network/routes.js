const user = require('../components/user/interface')
const contry = require('../components/country/interface')

const routes = function( server ) {
    server.use('/user', user)
    server.use('/country', user)
}

module.exports = routes