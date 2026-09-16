function calculateshiping(weight, country, orderTotal){
    
    if(weight <= 0 || orderTotal < 0){
        return -1
    }

    if(country == "IND"){
        if(weight <= 1){
            return 10
        }else if(weight <= 2){
            return 20
        }else if(weight <= 5){
            return 30
        }else{
            return 50
        }
    }else{
        if(weight <= 1){
            return 20
        }else if(weight <= 2){
            return 40
        }else if(weight <= 5){
            return 60
        }else{
            return 100
        }
    }
}

let weight;
let orderTotal;
var country;

console.log(calculateshiping(4, "IND", 10))