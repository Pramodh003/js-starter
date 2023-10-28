/*
Primitive: you will be getting copy . Memory will not be allocated

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

Javascript is dynamically typed

const score: 100
const score: 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

Reference: Memory is allocated

Array
Objects
Functions
*/

//array

// const heroes = ["thug",'hanuman']

// let myObj = {
//     name: "akash",
//     age: 22
// }

// const myFunction = function(){
//     console.log("Hello world")
// }

// output of type of dataytpes
// null -> object
// String -> String
// Number -> Number
// Boolean -> Boolean
// undefined - undefined
// Symbol -> Symbol
// BigInt -> Bigint


// ++++++++++++++++++++++++

//Two types of memory
//1.stack(primitive)--> you will get of value
//2.Heap(Non-primitive) -> reference



let mySchoolName = "navadeepschool"

let anotherName = mySchoolName
anotherName = "amarjyothi"


console.log(mySchoolName);
console.log(anotherName);


let userOne = {
    name: "akash",
    age: 22
}

let usertwo = userOne
usertwo.email = "pramodh@google.com"

console.log(usertwo.email);
console.log(userOne.email);
