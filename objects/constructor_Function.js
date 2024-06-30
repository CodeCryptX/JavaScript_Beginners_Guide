// Constructor Functions are used to create new objects as they "construct" or make new instances using the 'new' keyword.
// It's similar to factory functions but typically uses PascalCase in Object Oriented Programming conventions.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
}

let person1 = new Person('John', 30);  
let person2 = new Person('Alice', 25);

console.log(person1.greet()); // Outputs: Hello, my name is John and I'm 30 years old.
console.log(person2.greet()); // Outputs: Hello, my name is Alice and I'm 25 years old.

// How it works:
// 1) Create a new object.
// 2) Set properties using the 'this' keyword within the constructor function.
// 3) The 'new' keyword assigns these properties to the new object instance.

// Constructor functions provide flexibility and reusability in object creation.
