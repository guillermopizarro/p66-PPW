let caja = document.getElementById('box')

let id = null
let pos = 0

function move() {
    //clearInterval(id)
    id = setInterval(frame, 12)
}

function frame() {
    if (pos == 350)
        pos = 0
    else {
        pos++
        caja.style.left = pos + 'px'
    }
}