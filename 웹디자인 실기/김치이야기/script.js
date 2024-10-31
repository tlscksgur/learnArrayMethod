const clickM = document.querySelector (".clickM")
const closeM = document.querySelector (".closeM")
const dialog = document.querySelector ("dialog")

clickM.addEventListener ("click", ()=>{
    dialog.style.display = "grid"
})

closeM.addEventListener ("click", ()=>{
    dialog.style.display = "none"
})