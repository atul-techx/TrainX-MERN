const name = "Atul Gangwar"
const repoCount = 18

// console.log(name + repoCount + "on github");    // old way of present

console.log(`My name is ${name} and my repo count on github is ${repoCount}`);  // Best way 

const gameName = new String('AtulGangwar')  // Another way to declare string

// Methods of String ->

/*
console.log(gameName[0]);   // A
console.log(gameName.__proto__);    //  {}

console.log(gameName.length);   // 11
console.log(gameName.toUpperCase());    // ATULGANGWAR

console.log(gameName.charAt(4));    // G
console.log(gameName.indexOf("G")); // 4

*/

const newString = "Atul-Gangwar"
console.log(newString.substring(0, 4)); // Atul
console.log(newString.slice(-12, 4));

const anotherstring = '      AtulGangwar   '
console.log(anotherstring);
console.log(anotherstring.trim());

const url = "https://atul.com//atul%20Gangwar"

console.log(url.replace("%20", "-"));
console.log(url.replace("atul", "vijay"));

console.log(url.includes("atul"));  // true
console.log(url.includes("karan")); // false

const newName = "Atul-kumar-gangwar"

console.log(newName.split("-"));    // [ 'Atul', 'kumar', 'gangwar' ]













