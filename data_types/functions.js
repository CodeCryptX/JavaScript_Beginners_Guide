// ╔══════════════════════════════════════════╗
// ║         Functions in JavaScript          ║
// ╚══════════════════════════════════════════╝
// Functions are non-primitive data types.

// Simple function definition
function fun() {
    console.log('Hi!');
}

fun(); // Outputs: Hi!

// Function with single parameter
function fun1(name) {
    console.log("Hi! " + name);
}

fun1("Hassan"); // Outputs: Hi! Hassan

// Function with multiple parameters
function fun2(name, message) {
    console.log("Hi! " + name);
    console.log(message);
}

fun2("Hassan", "Happy to see you!"); // Outputs: Hi! Hassan, Happy to see you!

// Function returning a value
function calc(a, b) {
    return a + b;
}

console.log("The answer is:", calc(2, 2)); // Outputs: The answer is: 4

// Using functions in objects
let course = {
    name: "JavaScript",
    hour: 5,
    greet: function() {
        console.log("Welcome to the course!");
        return 2;
    }
};

course.greet(); // Outputs: Welcome to the course!

// Remember
console.log(course.greet);   // Prints the function definition without executing it
console.log(course.greet()); // Executes the function and captures the return value

let result = course.greet();
console.log(result); // Outputs: 2

// Note: When a function doesn't return anything, calling it multiple times displays 'undefined' after the second call.

// Sufficient for beginners
