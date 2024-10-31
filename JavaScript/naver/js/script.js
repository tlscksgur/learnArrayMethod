const inp = document.querySelector (".input")
const gl = document.querySelector (".glass")
const his = document.querySelector('.his')
let cksgur

function rjator() {
    cksgur = (inp.value)
    if (inp.value == "") {
        alert("입력하세요")
    }else{
        const box = document.createElement('div')
        box.textContent = inp.value
        his.appendChild(box)
        location.href = "https:///search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=" + cksgur
    }
}

gl.addEventListener ("click", rjator)

inp.addEventListener ("keydown", (qt)=>{
    if (qt.keyCode == 13) {
        rjator()
    }
})