// In JavaScript, functions are also objects

// Defining a simple function for mathematical calculation
console.log("Simple function:");
function add(n1, n2){
    return n1 + n2;
}

console.log("The result:", add(2, 3));

// Treating functions as objects by assigning to a variable
console.log("Function as object:");
let greet = function() {
    return "Hello!";
};

console.log(greet());

// Adding properties to a function object
add.sum = 5; // Functions can have attributes like objects
console.log(add.sum);

// Passing functions as parameters, similar to passing objects
function calculator(sum) {
    console.log(sum);
}

calculator(add(5, 5));
