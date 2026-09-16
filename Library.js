function Library(age){

    if(age<6){
        return "Too Young - must be atleast 6 year old"
    }else if (NoValidCard){
        return "Invalid library Card - please renew at the front desk"
    }else if(Overdue){
        return "Please return your " + x + " books first"
    }else{
        return "You can Borrow Books"
    }
}

let num = 16;
let x = 2;
var NoValidCard = false;
var Overdue = false;

console.log(Library(num))