class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super(nombre, apellido)
    }

    saludar() {
        console.log( `Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )
    }
}


let persona = new Persona('Ian', 'Cordova', 1.70)
persona.saludar()

let deportista = new Deportista('Klever', 'Gonzalez')
deportista.saludar()