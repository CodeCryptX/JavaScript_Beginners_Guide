// Now we will see the enumerating properties of objects
// Enumerating property means accessing the properties of the objects, which can be done using several methods as follows.

// Define a sample object
const person = {
    name: "Hassan",
    age: 25
};

// Get an array of keys (property names)
const keys = Object.keys(person);

console.log("The keys are:", keys); // Outputs: ["name", "age"]

// Get an array of values
const values = Object.values(person);

console.log("The values are:", values); // Outputs: ["Hassan", 25]

// You can explore more methods in the documentation

