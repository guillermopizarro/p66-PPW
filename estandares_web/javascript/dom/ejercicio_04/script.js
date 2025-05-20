let caja = document.getElementById('box')

let es_presionado = false
let offset = [0,0]

caja.addEventListener('mousedown', function(value){
    es_presionado = true

    offset = [
        caja.offsetLeft - value.clientX,
        caja.offsetTop - value.clientY
    ]
}, true)

caja.addEventListener('mouseup', function(valor) {
    es_presionado = false
}, true)

caja.addEventListener('mousemove', function(valor) {
    valor.preventDefault()

    if (es_presionado) {
        caja.style.left = (valor.clientX + offset[0]) + 'px'
        caja.style.top = (valor.clientY + offset[1]) + 'px'
    }
}, true)