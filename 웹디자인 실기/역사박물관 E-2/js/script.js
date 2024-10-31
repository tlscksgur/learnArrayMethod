const openlayer = document.querySelector (".openlayer")
const close = document.querySelector (".close")
const layer = document.querySelector (".layer")

function open() {
    openlayer.addEventListener('click', ()=>{
        layer.style.display = 'block'
    })
    close.addEventListener('click', ()=>{
        layer.style.display = 'none'
    })
}

open()