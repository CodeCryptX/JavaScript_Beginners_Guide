// Arrow functions
// Arrow functions provide a concise syntax for writing functions.

// Traditional function:
/*
let add = function (n1, n2) {
    return n1 + n2;
};
*/

// Arrow function equivalent:
const add = (n1, n2) => n1 + n2;

console.log(add(2, 3)); // Output: 5

// Arrow functions:
// 1. Cannot be used as constructors because they do not have their own "this" context.
// 2. Do not have their own `arguments` object; instead, they inherit it from the enclosing lexical scope.

// Example using arrow function and `this` context:
function Person() {
    this.age = 0;

    const Id = setInterval(() => {
        if (this.age < 4) {
            this.age++;
        } else {
            clearInterval(Id); // Clear the interval when age reaches 4
        }
        console.log(this.age);
    }, 1000);
}

const p = new Person(); // Outputs: 1, 2, 3, 4 (increments every second)

// Array-like object `arguments`
function number() {
    console.log(arguments); // Outputs: [1, 2, 3]
}

number(1, 2, 3);

// Functions as objects
// Functions in JavaScript are first-class citizens, so they can be assigned to variables and passed as arguments.

// Assigning a function to a variable
const sayHi = function() {
    console.log("Hi!");
};

sayHi(); // Outputs: Hi!

// Passing a function as an argument
function executeFunction(fn) {
    fn();
}

executeFunction(sayHi); // Outputs: Hi!

// Hoisting
// Function declarations are hoisted to the top of their scope during compilation.

hoistedFunction(); // Outputs: I am hoisted

function hoistedFunction() {
    console.log('I am hoisted');
}

// Variables declared with `var` are also hoisted but remain `undefined` until assignment.
console.log(name); // Outputs: undefined
var name = "Hassan";

// Hoisting does not apply to `let`, `const`, and function expressions in JavaScript.
