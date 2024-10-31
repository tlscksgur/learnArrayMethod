const num = document.querySelector(".num")
let click = document.querySelector(".click")
let number = 0

window.onload = function plus (){
    click.addEventListener("click",() =>{
        if(number >= 10){
            number = 0
            num.textContent = number
        }else{
            number++
            num.textContent = number
        }
    })
}