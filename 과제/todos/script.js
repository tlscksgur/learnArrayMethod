const $todolist = document.querySelector(".todo-list")
const $newtodo = document.querySelector(".new-todo")
const $filters = document.querySelector(".filters")

const n = [1,2,3,4];

console.log(n.includes()); 

console.log( n.every( value => value > 0 ) )

console.log(n.filter( value => value%2 === 0 ))
// forEach : void
// map  : array  
// filter : array
// find  : undefined, value 
// findIndex : number
// some :boolean
// every  : boolean 
// reduce : 하기나름 
// join : string
// includes : boolean 


function findIndexByValue2(array,findValue){
    return array.findIndex( (value) => value === findValue )
}

function findIndexByValue(array,value){
    for(let i=0; i<array.length; i++){
        if(n[i] === value){
            return i
        }
    }
    return -1
}

n.every( value => value > 0 )

let isEvery = true;
for(let i=0; i<n.length; i++){
    if( n[i] < 0 ){
        isEvery = false
        break
    } 
}
console.log(isEvery)

console.log(
    findIndexByValue(n,4),
    findIndexByValue2(n,4),
)




function $todo() {
    if (!$newtodo.value.trim()) {
        alert('입력하세요.')
    }else{
        const li = document.createElement('li')
        li.innerHTML += `
            <div class="view">
              <input class="toggle" type="checkbox"/>
              <label>${$newtodo.value}</label>
              <button class="destroy"></button>
            </div>`
            $todolist.appendChild(li)
    }
    $newtodo.value = ""

    const $Del = document.querySelectorAll(".destroy")
    $Del.forEach($Delbtn => {
        $Delbtn.addEventListener('click',()=>{
            $Delbtn.parentNode.parentNode.remove()
        })
    });
}

function checkbox() {
    const $checked = document.querySelectorAll('.toggle')
    $checked.forEach(checkbtn => {
        checkbtn.addEventListener('click', ()=>{
            checkbtn.parentNode.parentNode.classList.toggle('completed')
        })
    });
}

function $Allcheck() {
    const $All = document.querySelector(".toggle-all")
    Array.from($todolist.children).forEach(todo => {
        $All.addEventListener("click", ()=>{
            if($All.checked){
                todo.classList.add('completed')
                todo.children[0].childNodes[1].checked = true
            }else{
                todo.classList.remove('completed')
                todo.children[0].childNodes[1].checked = false
            }
        })
    });
}

const $hash= document.querySelectorAll(".filters > li > a")
window.addEventListener("hashchange", ()=>{
    $hash.forEach(fil => {
        if(window.location.hash == fil.hash){
                fil.classList.add('selected')
            }else{
                fil.classList.remove('selected')
            }
    });
})



$newtodo.addEventListener('keypress', (e)=>{
    if (e.keyCode == 13) {
        $todo()
        checkbox()
        $Allcheck()
    }
})