var contactos = []

function contacto(nombre, apellido, correo) {
    this.nombre = nombre
    this.apellido = apellido
    this.correo = correo
}

let objeto = new contacto( 'Juan Luis', 'Guerra', 'jguerra@ups.edu.ec' )
contactos.push(objeto)
objeto = new contacto( 'Juana', 'La Cubana', 'jlacubana@ups.edu.ec' )
contactos.push(objeto)

contactos.forEach( (data) => console.log(data) )