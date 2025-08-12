const storage = require('./storage')

function addCity( data ) {
    return new Promise((resolve, reject) => {
        if (!data.name) {
            reject('error:ingresar-data')
        } else { 
            resolve( storage.add( data ) )  
        }
    })
}

function getCity( data ) {
    return new Promise((resolve, reject) => {
        resolve( storage.get( data ) )
    })
}

function updateCity( data ) {
    return new Promise((resolve, reject) => {
        if (data) {
            resolve( storage.update( data ) )
        } else {
            reject('error:no-existe')
        }
    })
}

function deleteCity( data ) {
    return new Promise((resolve, reject) => {
        if (data)
            resolve( storage.delete( data ) )
        else
            reject('error:ingresar-data')
    })
}

module.exports = {
    addCity,
    getCity,
    updateCity,
    deleteCity
}