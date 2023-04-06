const person = [
    {name: "Ibraheem Bakare", job: "Pharmacist", info: "I am the best guy rigth now", hobby: "Reading", img: "/images/ororo.jpeg"},
    {name: "Abeeb Bakare", job: "Botanist", info: "I am the second best guy rigth now", hobby: "Sleeping", img: "/images/image-s1.png"},
    {name: "Toyyib Bakare", job: "Engineer", info: "I am the third best guy rigth now", hobby: "Talking", img: "/images/image-s4.png"},
]


let name = document.querySelector(".name")
let job = document.querySelector(".job")
let info = document.querySelector(".info")
let hobby = document.querySelector(".hobby")
let img = document.querySelector("img")
let btn = document.querySelector("button")
let btns = document.querySelector(".btns")

let currentCount = 0


window.addEventListener("DOMContentLoaded", function(e){
     btn.addEventListener("click", function(e){
 let newPerson = person.map(function(item){


        return `<h3>${item.name}</h3>
        <h3>${item.job}</h3>
        <h3>${item.info}</h3>
        <h3>${item.hobby}</h3>
        <img src=${item.img}>`
    })
    let div = document.querySelector(".div")
    div.innerHTML = newPerson[generateRandomNumber()]
})
})

btns.addEventListener("click", function(){
    let newPerson = person.map(function(item){
        return `<h3>${item.name}</h3>
        <h3>${item.job}</h3>
        <h3>${item.info}</h3>
        <h3>${item.hobby}</h3>
        <img src=${item.img}>`
    })
    let div = document.querySelector(".div")
    div.innerHTML = newPerson[increase()]
})

function generateRandomNumber(){
    return Math.floor(Math.random() * person.length)
}

function increase(){
    if(currentCount > 2){
       currentCount = 0
   }
   return currentCount++
   
}
