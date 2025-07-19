// ====================
// Tipos de datos
// ====================

// Tipo de dato: number 
var a = 100
console.log(a)
console.log( typeof a)
// Tipo de dato: string
var b = 'Hola mundo'
console.log(b)
console.log( typeof b)
// Tipo de dato: boolean
var c = true
console.log(c)
console.log( typeof c)
// Tipo de dato: number
var d = 1.54
console.log(d)
console.log( typeof d)
var e 
console.log( typeof e)
var f = null
console.log( typeof f)

var persona = {
    nombre: 'Juana',
    apellido: 'Zamora',
    ciudad: 'Guayaquil'
}
console.log( typeof persona)
console.log(persona.nombre)

// Comparaciones
console.log(1 == 1)
console.log(1 == '1') // Compara solo valores
console.log(1 === '1')// Compara valores y tipo de dato

console.log( 1 == true )
console.log( 1 === true )

console.log( 0 == false )
console.log( 0 === false )

console.log( 0 == null )
console.log( 0 === null )
console.log( 0 == undefined )
console.log( 0 === undefined )

console.log( undefined == null ) // No son nada.
console.log( undefined === null )

console.log( false == null )
console.log( null )
console.log( !null )
console.log( !!null )

console.log( undefined )
console.log( !undefined )
console.log( !!undefined )

var obj1 = { nombre: 'Jordy' }
var obj2 = { nombre: 'Jordy' }

console.log(obj1 == obj2)
console.log(obj1.nombre == obj2.nombre)

// Copia por referencia
var obj3 = obj2
console.log(obj2 == obj3)
// Copia por valor
var obj4 = {
    nombre: obj2.nombre
}
console.log(obj2 == obj4)