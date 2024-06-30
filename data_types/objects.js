/*
╔══════════════════════════════════════════╗
║          Objects in JavaScript           ║
╚══════════════════════════════════════════╝
Objects are non-primitive or referenced data types, flexible in size, and can hold multiple data variables.

*/

// Initialization
let course = {
    name: "JavaScript",
    hour: 5
};

// How to access properties in an object
console.log(course.name);   // Outputs: JavaScript
console.log(course['name']); // Another way to access: JavaScript

let title = "name";
console.log(course[title]); // Access using a variable: JavaScript

console.log(course.hour);   // Outputs: 5
console.log(course['hour']); // Another way to access: 5

// Manipulating objects
// Changing the course name
course.name = "JavaScript Course for Beginners Part 1";
console.log(course.name);   // Outputs: JavaScript Course for Beginners Part 1

course['name'] = 'JavaScript Basic to Advanced';
console.log(course.name);   // Outputs: JavaScript Basic to Advanced

// Functions in objects (methods)
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Outputs: Hello, John
