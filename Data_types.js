/* 
Primitive (7 types) -> String, Number, Boolean, null, undefined, Symbol, bigint   

*/

const name = "Atul gangwar"
const Number = 2026

const isLoggedIn = true
const Container = null

let userEmail;
let userEmail2 = undefined

const Id = Symbol("2026")
const newId = Symbol("2026")    // these are not same because Symbol makes value Unique

console.log(Id === newId);      // false

const bigNumber = 37414983443216565n    // bigint


/*
Reference (Non-Primitive) -> Array, Objects, functions

*/

const heros = ["Atul", "Shaktiman", "IronMan"]  // Array

let myObj = {       //object
    name:"Atul",
    age: 18,
}

const myFunction = function(){
    console.log("Hello Atul");
    
}

// Data types of variables ->

console.log(typeof bigNumber);  // bigint
console.log(typeof Container);  // object
console.log(typeof isLoggedIn); // boolean
console.log(typeof newId);  // Symbol
console.log(typeof myObj);  // object
console.log(typeof myFunction); // function (object function)
console.log(typeof heros);  // object






