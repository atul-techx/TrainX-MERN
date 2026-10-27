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

/*
# Data types of variables ->

console.log(typeof bigNumber);  // bigint
console.log(typeof Container);  // object
console.log(typeof isLoggedIn); // boolean
console.log(typeof newId);  // Symbol
console.log(typeof myObj);  // object
console.log(typeof myFunction); // function (object function)
console.log(typeof heros);  // object

*/

// ++++++++++++++++++++++++++++++++++ Stack and Heap Memory ++++++++++++++++++++++++++++++++++++

// Stack (Primitive)  , Heap (Non-Primitive)

let myYoutubeName = "Youtubedotcom"

let anotherYoutubeName = myYoutubeName

anotherYoutubeName = "Googledotcom" // it do not change original value because it have only the copy of that var data in STACK

console.log(myYoutubeName);     // Youtubedotcom
console.log(anotherYoutubeName);        // Googledotcom

let user1 = {
    email: "user1@gmail.com",
    upi: "user1@oksbi"

}

let user2 = user1       // it give refrence of the org variable, so if we change in user2 the value will automaticaly change in user1

user2.email = "atul@gmail.com"

console.log(user1.email);   // ans for both will be same 
console.log(user2.email);   // because both points to same memory location in HEAP


/*
VISUAL MEMORY MAP OF THIS CODE:

         STACK MEMORY                                   HEAP MEMORY
    (Stores Primitive values )                  (Stores Non-Primitive Objects)
┌─────────────────────────────────┐           ┌─────────────────────────────────┐
│                                 │           │                                 │
│ ┌─────────────────────────────┐ │           │                                 │
│ │ user2                       │─┼───────────┼──────────┐                      │
│ └─────────────────────────────┘ │           │          │                      │
│ ┌─────────────────────────────┐ │           │          ▼                      │
│ │ user1                       │─┼───────────┼────► ┌───────────────────────┐  │
│ └─────────────────────────────┘ │           │      │ {                     │  │
│ ┌─────────────────────────────┐ │           │      │   email: "atul...",   │  │
│ │ anotherYoutubeName:         │ │           │      │   upi: "user1@oksbi"  │  │
│ │ "Googledotcom"              │ │           │      │ }                     │  │
│ └─────────────────────────────┘ │           │      └───────────────────────┘  │
│ ┌─────────────────────────────┐ │           │                                 │
│ │ myYoutubeName:              │ │           │                                 │
│ │ "Youtubedotcom"             │ │           │                                 │
│ └─────────────────────────────┘ │           │                                 │
└─────────────────────────────────┘           └─────────────────────────────────┘
*/










