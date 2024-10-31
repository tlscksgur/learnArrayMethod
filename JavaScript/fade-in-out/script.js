const slide = document.querySelectorAll (".slide")
let move = 0

setInterval(() => {
    if (move == 3) {
        move = 0
    }
    for(let tls = 0; tls < 3; tls++){
        slide[tls].style.opacity= '0'
    }
    slide[move].style.opacity= '1'
    move++
}, 2000);