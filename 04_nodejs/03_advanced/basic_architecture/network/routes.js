const user = require('../components/user/interface')

const routes = function( server ) {
    server.use('/user', user)
}

module.exports = routes