function calculateGrade(score) {
    
    if (score < 0 || score > 100) {
        return "Invalid";
    }

    
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let number = 85; 
let finalGrade = calculateGrade(number);

console.log("Score: " + number + " -> Grade: " + finalGrade); 


// console.log(calculateGrade(95)); 
// console.log(calculateGrade(72));  
// console.log(calculateGrade(55));  
// console.log(calculateGrade(105)); 
