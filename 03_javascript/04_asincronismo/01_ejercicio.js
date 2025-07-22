function hablar(nombre, fn) {
    setTimeout(function() {
        console.log(`bla bla bla...`)
        fn(nombre)
    }, 2000)
}

function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn(nombre, adios)
    }, 2000)
}

function adios(nombre) {
    setTimeout(function() {
        console.log(`Adiós ${nombre}.`)
        console.log('Finalizando conversación.')
    }, 2000)
}

console.log('Iniciando conversación.')
saludar('Srta. Presidenta', hablar)
