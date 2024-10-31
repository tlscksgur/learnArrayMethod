const layer = document.querySelector('.layer')
const close = document.querySelector('.close')
const openlayer = document.querySelector('.openlayer')
const lbtn =document.querySelector('.lbtn')
const rbtn =document.querySelector('.rbtn')
const notice =document.querySelector('.notice')
const gallery =document.querySelector('.gallery')

function open() {
    openlayer.addEventListener('click',()=>{
        layer.style.display = 'block'
    })

    
    close.addEventListener('click',()=>{
        layer.style.display = 'none'
    })
}


function tab(){
    lbtn.addEventListener('click',()=>{
        lbtn.style.backgroundColor = 'red'
        rbtn.style.backgroundColor = 'white'
        notice.style.display = "block"
        gallery.style.display = "none"
    })
    
    rbtn.addEventListener('click',()=>{
        lbtn.style.backgroundColor = 'white'
        rbtn.style.backgroundColor = 'red'
        notice.style.display = "none"
        gallery.style.display = "block"
    })
}

open()
tab()