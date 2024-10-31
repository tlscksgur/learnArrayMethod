let fade = document.querySelector(".box")
let color = ["red","orange","yellow","lightgreen","green","skyblue","blue","navy","purple"]
let i = 0

fade.style.transition = "1.5s ease-in-out"

window.onload = function rainbow(){
    setInterval(() => {
        if(i >= 6){
            i = 0
            fade.style.backgroundColor = color[i]
        }else{
            i++
            fade.style.backgroundColor = color[i]
            console.log(i)
        }
    }, 1500);
}