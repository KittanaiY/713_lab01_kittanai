function greet(name){
    return("Hello, "+name); 
}

console.log(greet("John"));

function summation(scores){
    let sum = 0;
    for (let i = 0; i < scores.length ; i++){
        sum += scores[i];
    }
    return sum;
}

let scores = [10,20,30];
console.log(summation(scores));