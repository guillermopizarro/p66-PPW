const storage = require('./storage')

function addUser( data ) {
    return new Promise( (resolve, reject) => {
        if (!data.user || !data.name || !data.last_name) {
            reject('Ingresar los datos solicitados.')
        } else {
            resolve( storage.add( data ) )
        }
    } )
}

function getUser( data ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( data ) )
    } )
}

function updateUser( data ) {
    return new Promise( (resolve, reject) => {
        if (!data.user || !data.name || !data.last_name) {
            reject('Ingresar los datos solicitados.')
        } else {
            resolve( storage.update( data ) )
        }
    } )
}

function deleteUser( data ) {
    return new Promise( (resolve, reject) => {
        if (!data.user) {
            reject('Ingresar los datos solicitados.')
        } else {
            resolve( storage.delete( data ) )
        }
    } )
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}