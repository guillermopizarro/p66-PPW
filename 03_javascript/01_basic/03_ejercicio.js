// Creacion de un objeto de manera estatica
let mi_carro = {
    marca: 'Mazda',
    modelo: 'El mas cool',
    anio: 2025,
    detalle_auto: function() {
        console.log( `Auto: ${this.marca}-${this.modelo}, Año: ${this.anio}.` )
    }
}

mi_carro.detalle_auto()

// Creacion de un objeto de manera dinamica
function carro(marca, modelo, anio) {
    this.marca = marca
    this.modelo = modelo
    this.anio = anio
    this.detalle_auto = function() {
        console.log( `Auto: ${this.marca}-${this.modelo}, Año: ${this.anio}.` )
    }
}

let mi_auto = new carro('Ford', 'Focus', 2023)
mi_auto.detalle_auto()