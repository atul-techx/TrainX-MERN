const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// Prototype methods of Number ->

console.log(balance.toString().length);     // 3

const value = 102.4641444446464
console.log(value.toFixed(2));      // 102.46

console.log(value.toPrecision(4));      // 102.5

const hundreds = 1000000000
console.log(hundreds.toLocaleString());     // 1,00,00,00,000

// We can also check more methods used in Number with the console using [ Number. ]




// +++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-84));     // -84 -> 84   and 84 -> 84
console.log(Math.floor(24.45));     // 24
console.log(Math.ceil(24.45));      // 25

console.log(Math.round(245.65));        // roundoff according to the number
console.log(Math.min([25, 54, 58, 45]));

console.log(Math.random());     // gives value between 0 - 1
console.log(Math.floor(Math.random()*10) + 1);        // gives between 1 - 10


// Short way to find value betwenn min - max   -->

const min = 10 
const max = 20

finalValue = Math.floor(Math.random() * (max - min + 1)) + min

console.log(finalValue);







