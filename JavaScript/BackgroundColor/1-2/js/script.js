let box = document.querySelector(".box")
let i = 0

box.style.transition = "1.5s ease-in-out"

setInterval(() => {
    if(i == 1){
        box.style.backgroundColor = "red"
    }else if(i == 2){
        box.style.backgroundColor = "orange"
    }else if(i == 3){
        box.style.backgroundColor = "yellow"
    }else if(i == 4){
        box.style.backgroundColor = "lightgreen"
    }else if(i == 5){
        box.style.backgroundColor = "green"
    }else if(i == 6){
        box.style.backgroundColor = "skyblue"
    }else if(i == 7){
        box.style.backgroundColor = "blue"
    }else if(i == 8){
        box.style.backgroundColor = "purple"
        i = 0
    }

    i++
}, 1500);

addEventListener.ad