'use strict'

// let headingTag = document.getElementsByTagName("h1");
// console.log(headingTag);
// headingTag.color = 'red';
// let newHeading = [... headingTag]
// newHeading.forEach((singleTag)=> singleTag.style.color ="red");

// let dec = document.querySelector('.dec');
// let h1 = document.querySelector('h1');
// let inc = document.querySelector('.inc')

// dec.addEventListener('click',function(){
//     h1.innerText = "Steff"
// })


// // line 6
// function bodyChanger(){
//     document.body.style.backgroundColor = "red"
// }

// inc.addEventListener('click',bodyChanger)

let dec = document.querySelector(".dec")
let h1 = document.querySelector("h1")

// decrease
function decremental(){
    h1.innerText-- ;
}
dec.addEventListener("click", decremental);


let inc = document.querySelector(".inc")
let newh1 = document.querySelector("h1")

function incremental(){
    newh1.innerText ++;
}

inc.addEventListener("click", incremental);

let res = document.querySelector(".res")
let Nh1 = document.querySelector("h1")

function reset(){
    Nh1.innerText = [0]
}

res.addEventListener("click", reset)