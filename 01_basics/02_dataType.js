const name = "Souvik"
let city = "New Delhi"
let age = 22

console.log(typeof(name))

/*
    data types are based on how it stores in the memory and how we access it 
    premitive Data Types : all the changes are made on the copy not in the actual memory 
        1. Number
        2. String
        3. Boolean
        4. bigint
        5. undefined
        6. null
        7. symbol : unique (mostly used in React)

    Non-premitive Data Types  / Reference Type :
        1. Object
        2. Arrays
        3. Functions
*/

console.log(typeof undefined)
console.log(typeof null)

/*
    undefined is a type itself in javascript but null is type of object 
*/

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId)

const colors = ["Red","Blue","Green"]       //  Arrays
const user = {
    name :"Souvik",
    age:22,
    city:"New Delhi"
}
function sayHi(){
    console.log("Hi")
}