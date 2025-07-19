// ====================
// Tipos de funciones
// ====================
// Función declarativa
function print(valor) {
    console.log(valor)
}

print('Hola mundo')

// Función expresiva
const suma = function(a, b) {
    return (a + b)
}

var resultado = suma(10, 20)
console.log(resultado)

// Función flecha
const suma2 = (a, b) => a+b
var resultado2 = suma2(100, 200)
console.log(resultado2)

const suma3 = (a, b) => {
    resultado = a + b
    console.log('El resultado es ' + resultado)
}
suma3(20,20)

// literal pattern
var result = 10 + 30
var texto = `El resultado de la suma es ${result}.`
console.log( texto )
var obj1 = { nombre: 'Jordy' }
console.log( `${obj1.nombre}` )


// Alcance de las variables
var a = 'Hola mundo'
const b = 100

function imprimir() {
    let temp = 'Luis'
    var temp2 = 'Juan'
    console.log(a)
    console.log(temp)
    console.log(temp2)
}

imprimir()
console.log(temp2)
console.log(b)