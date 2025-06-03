const URL_API = 'https://rickandmortyapi.com/api/character/'

function cargar_datos(personaje_id) {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', URL_API + personaje_id, true)
    xhttp.onreadystatechange = function() {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            let texto = JSON.parse(xhttp.responseText)
            crear_personaje(texto)
        }
    }
    xhttp.send()
}

function crear_personaje(personaje) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.appendChild( document.createTextNode(personaje.name) )
    div.appendChild(h1)

    let image = document.createElement('img')
    image.src = personaje.image
    div.appendChild(image)

    let contenedor = document.getElementById('container')
    contenedor.appendChild(div)
}

for (let i=1; i<=100; i++) {
    cargar_datos(i)
}