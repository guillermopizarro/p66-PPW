function hablar(fn) {
    setTimeout(function() {
        console.log(`bla bla bla...`)
        fn()
    }, 1000)
}

function dialogar(nombre, num_veces) {
    if (num_veces > 0) {
        hablar(function() {
            dialogar(nombre, --num_veces)
        })
    } else {
        adios(nombre)
    }
}

function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn(nombre, 5)
    }, 2000)
}

function adios(nombre) {
    setTimeout(function() {
        console.log(`Adiós ${nombre}.`)
        console.log('Finalizando conversación.')
    }, 2000)
}

console.log('Iniciando conversación.')
saludar('Abatte', dialogar)
