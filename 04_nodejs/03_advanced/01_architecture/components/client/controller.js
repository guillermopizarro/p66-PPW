const storage = require('./storage')

function addClient( data ) {
    return new Promise((resolve, reject) => {
        if (!data.identify || !data.name || !data.lastname) {
            reject('error:ingresar-data')
        } else {
            resolve( storage.add( data ) )  
        }
    })
}

function getClient( data ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( data ) )
    })
}

module.exports = {
    addClient,
    getClient,
}