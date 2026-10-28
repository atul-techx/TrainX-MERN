// Dates ->

let myDate = new Date()

// console.log(typeof(myDate));

// console.log(myDate);        // 2026-10-28T09:25:16.458Z
// console.log(myDate.toString());     // Wed Oct 28 2026 14:54:33 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     // Wed Oct 28 2026
// console.log(myDate.toLocaleString());      // 28/10/2026, 2:57:33 pm


// Ways of Creating New Dates ->

let myCreatedDate = new Date(2026, 9, 28)
let myCreatedDate1 = new Date(2026, 9, 28, 5, 3)
// let myCreatedDate2 = new Date("2026-10-28")
let myCreatedDate2 = new Date("10-28-2026")

// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleDateString());
// console.log(myCreatedDate2.toLocaleString());

// TimeStamp ->

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate2.getTime());       // in MiliSec
// console.log(Math.floor(Date.now()/1000));       // in Sec

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);    // 10 -> Oct
console.log(newDate.getDay());      // 3 -> Wed

// also use it like
// console.log(`Today is ${newDate.getDay()} Day and time is ${newDate.getTime()}`);

newDate.toLocaleString('default', {         // we can also more customize it according to our choice
    weekday: 'long',
    dateStyle: 'full'
})


