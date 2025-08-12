const storage = require('./storage')

function getCountry( data ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( data ) )
    })
}

module.exports = {
    getCountry,
}