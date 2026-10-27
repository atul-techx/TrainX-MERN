let score = "158abc"

/* 
"33" -> 33
"33abc" -> NaN 
null -> it convert it into 0
undefined -> give NaN
boolean -> 1 for true / 0 for false
*/

console.log(typeof score)   // string

let ValueInNumbers = Number(score)
console.log(typeof ValueInNumbers)  // number
console.log(ValueInNumbers);    // NaN -> Not a number if we store 158abc -> mix of num and char

// Conversion in Boolean
let IsLoggedIn = 1

let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn);

/*
1 -> true 
0 -> false
"" -> false
"Atul" -> true
*/

// String Conversion
let someNumber = 123
console.log(someNumber);


let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);




