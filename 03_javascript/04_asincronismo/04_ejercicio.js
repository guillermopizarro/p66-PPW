async function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Iniciando conversación.')
            console.log(`Hola ${nombre}`)
            resolve( nombre )
        }, 1000)
    } )
} 

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla...')
            resolve( nombre )
        }, 1000)
    } )
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log(`Adiós ${nombre}.`)
            console.log('Finalizando conversación.')
            resolve( nombre )
        }, 1000)
    } )
} 

async function conversacion() {
    let nombre = await hola('Luisito')
    await hablar()
    await hablar()
    await hablar()
    await hablar()
    await adios(nombre)
}

conversacion()