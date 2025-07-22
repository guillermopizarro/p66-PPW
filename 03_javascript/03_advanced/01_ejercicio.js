// Prototype
// El prototype es un mecanismo fundamental para la herencia y la compartición de propiedades 
// y métodos entre objetos. 
// Cuando declaras funciones dentro de un objeto (específicamente, cuando usas funciones 
// constructoras), el prototype juega un papel crucial.

// Javascript Puro / Nativo
function herencia(prototipo_padre, prototipo_hijo) {
    let fn = function() {}

    fn.prototype = prototipo_padre.prototype
    prototipo_hijo.prototype = new fn()
    prototipo_hijo.prototype.constructor = prototipo_hijo
    
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
}

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

herencia(Persona, Deportista)

Deportista.prototype.saludar = function() {
    console.log( `Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )
}

let persona = new Persona('Ian', 'Cordova', 1.70)
persona.saludar()

let deportista = new Deportista('Juana', 'La Cubana', 1.70)
deportista.saludar()