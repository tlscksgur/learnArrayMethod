const layer = document.querySelector (".layer")
const openlayer = document.querySelector(".openlayer")
const close = document.querySelector (".close")

function open() {
    openlayer.addEventListener('click', ()=>{
        layer.style.display = 'block'
    })
    close.addEventListener('click', ()=>{
        layer.style.display = 'none'
    })
}

open()