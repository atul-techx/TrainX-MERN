let score = "158abc"

/* 
"33" -> 33
"33abc" -> NaN 
null -> it convert it into 0
undefined -> give NaN
boolean -> 1 for true / 0 for false
*/

// console.log(typeof score)   // string

let ValueInNumbers = Number(score)
// console.log(typeof ValueInNumbers)  // number
// console.log(ValueInNumbers);    // NaN -> Not a number if we store 158abc -> mix of num and char

// Conversion in Boolean
let IsLoggedIn = 1

let BooleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(BooleanIsLoggedIn);

/*
1 -> true 
0 -> false
"" -> false
"Atul" -> true
*/

// String Conversion
let someNumber = 123
// console.log(someNumber);


let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ************************* Operations *************************

let value = 3
let negValue = - value

// console.log(negValue);  // -3

let str1 = "Atul"
let str2 = " Gangwar"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log("1" + 2 + 2);   // 122
// console.log(1 + 2 + "2");   // 32

// console.log(3 + 4 * 5 % 2); // this is only right for questions not better for real coding or app


// console.log(true);  // true
// console.log(+true); // 1
// console.log(+"");   // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // this is also not the best choice

let gameCounter = 100
gameCounter++       // 101 postfix
++gameCounter       // first change the value then use next -> prefix
console.log(gameCounter);












