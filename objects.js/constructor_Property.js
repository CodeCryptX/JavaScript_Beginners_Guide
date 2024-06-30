// Understanding the constructor property in JavaScript

// When we create a new object using a constructor function, the object's constructor property
// refers to the constructor function that was used to create it.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Accessing the constructor of the 'person' object
let text = person.constructor;
console.log("Constructor function that created 'person':", text); // Output: function Object() { [native code] }

// Creating a constructor function 'Person'
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Creating an object 'user' using the 'Person' constructor
let user = new Person("Hassan", 25);
text = user.constructor;
console.log("Constructor function that created 'user':", text); // Output: function Person(name, age) { ... }

// The constructor property is inherent to every object in JavaScript.
