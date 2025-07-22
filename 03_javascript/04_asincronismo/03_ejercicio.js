function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Iniciando conversación.')
            console.log(`Hola ${nombre}`)
            resolve( nombre )
        }, 1000)
    } )
} 

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla...')
            resolve( nombre )
        }, 1000)
    } )
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log(`Adiós ${nombre}.`)
            console.log('Finalizando conversación.')
            resolve( nombre )
        }, 1000)
    } )
} 


hola('Luisito')
    .then( (dato) => hablar(dato) )
    .then( (dato) => hablar(dato) )
    .then( (dato) => hablar(dato) )
    .then( (dato) => hablar(dato) )
    .then( (dato) => adios(dato) )
    .catch( (dato) => console.log('Error') )