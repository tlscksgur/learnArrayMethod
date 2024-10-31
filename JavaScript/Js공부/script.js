// forEach : void
const pinkbox = document.querySelectorAll('.box')
pinkbox.forEach(pbox => {
    setInterval(() => {
        pbox.style.backgroundColor = 'darkgray'      
    }, 1000);
    setInterval(() => {
        if (pbox.style.backgroundColor = 'darkgray') {
            pbox.style.backgroundColor = 'lightgray'
        }
    }, 1500);
});
// map  : array
let map = [2, 4, 6 ,8]
let tls = map.map(function(e){
    return e * 5000
})
// console.log(tls);
// filter : array
const person = [{name: 'Alice', age: 25}, {name: 'Bob', age: 18}, {name: 'Charlie', age: 30}]
const adults = person.filter(person => person.age >= 20)
// console.log(adults);
// --------------------------------------------------------------------------
// find  : undefined, value
const people = ['tlscksgur', 'durnjsdn', 'rlatmdcks']
const tlscksgur = people.find(function(search){
    return search === 'tlscksgur'
})
// console.log(tlscksgur);
// includes : boolean   배열에 특정 요소가 포함하는지 확인하는 함수
const qoduf = [4, 5, 6, 7, 8, 9]
// console.log(qoduf.includes(4));

const dkd = ['cksgur', 'sksms', 'dkfvkapdlf']
// console.log(dkd.includes('cksgur'));

// findIndex : number   //위에 꺼랑 똑같음
// --------------------------------------------------------------------------

// some :boolean   특정 요소가 주어진 판별 함수를 하나라도 통과하는지 테스트한다.
const number = [1, 2, 4, 6, 7, 8, 10]
function findNumber(e){
    return e === 10
}
const hasNumber = number.some(findNumber)
// console.log(hasNumber);

// every  : boolean  배열의 모든 요소가 특정 조건을 만족하는지 확인한다.
const lucky = [7, 7, 7, 7]

function findseven(find){
    return find === 7
}
const allseven = lucky.every(findseven)
// console.log(allseven);

// reduce : 하기나름   배열의 모든 요소에 콜백 함수를 적용하여 하나의 결과 값을 생성하는 함수
//잘모르겠음

// join : string
const wont = ['안', '녕', '하', '세', '요']
// console.log(wont.join(''));
const num = [1,2,3,4,5,6,7,8,9,10]
// console.log(num.join('-'));

//...  배열의 요소들을 펼쳐서 한 번에 출력한다, 배열이나 객체를 합쳐서 출력한다.
const ob1 = { name: "chanhyuk"}
const ob2 = { age: "17"}

const Obj = {...ob1, ...ob2}

// console.log(Obj);

// slice
const colors = ["red", "green", "blue", "orange", "yellow", 'pink', 'black', 'white']

const slicecolor = colors.slice(3, 8)
console.log(slicecolor);