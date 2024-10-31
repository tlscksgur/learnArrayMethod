const lbtn = document.querySelector (".lbtn")
const rbtn = document.querySelector (".rbtn")
const notice = document.querySelector (".jsclick")
const gallery = document.querySelector (".banner-gallery")



function btn() {
    lbtn.addEventListener('click', ()=>{
        lbtn.style.backgroundColor = 'pink'
        rbtn.style.backgroundColor = 'white'
        notice.style.display = "block"
        gallery.style.display= "none"
    })
    rbtn.addEventListener('click', ()=>{
        rbtn.style.backgroundColor = 'gray'
        lbtn.style.backgroundColor = 'white'
        notice.style.display = "none"
        gallery.style.display= "block"
    })
}

btn()

// ---------------------------

const openlayer = document.querySelector (".openlayer")
const close = document.querySelector (".close")
const pop = document.querySelector (".pop")

function open() {
    openlayer.addEventListener('click', ()=>{
        pop.style.display = "block"
    })
    close.addEventListener('click', ()=>{
        pop.style.display = "none"
    })
}

open()

// ------slide------

const slide = document.querySelectorAll ('.jsimg')

let move = 0

setInterval(() => {
    if(move == 3){
        move = 0
    }for(let img = 0; img < 3; img++){
        slide[img].style.opacity = '0'
    }
    slide[move].style.opacity = '1'
}, 2000);