// As variables, objects are also dynamic in JavaScript.
// You can add or delete properties after defining them.

const person = {
    name: "Hassan",
    age: 25
};

console.log("Before adding a new property:");
for (const key in person) {
    console.log(person[key]);
}

// Adding a new property
person.salary = '$1k';

console.log("\nAfter adding a new property:");
for (const key in person) {
    console.log(person[key]);
}

// Adding a method
person.greet = function() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
};

console.log(person.greet());

// Deleting a property
console.log("\nAfter deleting a property:");
delete person.salary;

for (const key in person) {
    console.log(person[key]);
}

// NOTE: Even though 'person' is declared as const, its properties can still be modified or deleted.

// If 'person' was defined using 'let', you could assign it to an empty object.
// Example with 'let' instead of 'const':

let book = {
    name: "Think and Grow Rich",
    author: "Napoleon Hill"
};

console.log("\nBook before emptying:");
for (const key in book) {
    console.log(book[key]);
}

// Emptying the object
book = {};

console.log("\nBook after emptying:");
for (const key in book) {
    console.log(book[key]);
}
