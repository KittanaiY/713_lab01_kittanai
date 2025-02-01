const greet = function greet(name){
    return("Hello , "+name); 
}

console.log(greet("John"));

const greet2 = (name) => 'Hello, ' + name;

console.log(greet2("John"));

const multiply = (x,y) => {return x*y};

console.log(multiply(2,3));

const max_num = (x,y) => { if (x > y) {return x} else {return y}};
console.log(max_num(2,3));