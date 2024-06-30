/*
Global Scope: Variables declared outside of any function or block have global scope.
Local Scope: Variables declared inside a function or block have local scope and are accessible only within that function or block.
Block Scope: Introduced with let and const in ES6, variables are scoped to the nearest curly braces {}.
*/

// This is the last thing we're covering in this beginner course

// The 'this' keyword in JavaScript is a reference to the object that owns the current code being executed.

// In a regular function (not an arrow function), 'this' refers to the object that called the function.

function greet() {
    return `Hello, ${this.name}!`;  // 'this' refers to the 'person' object because it called the function
}

const person = {
    name: 'Hassan',
    greet: greet
};

console.log(person.greet()); // Outputs: "Hello, Hassan!"

// We have seen earlier that arrow functions do not have their own 'this' context. Use .bind() to set 'this' in arrow functions.
