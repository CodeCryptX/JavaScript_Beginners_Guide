// Using the rest operator to gather multiple function arguments into an array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Outputs: 6
console.log(sum(4, 5, 6, 7)); // Outputs: 22

// Using the rest operator to gather remaining object properties into a new object
const person = { 
    name: "Hassan",
    age: 25
};

const { ...rest } = person;

console.log(rest); // Outputs: { name: "Hassan", age: 25 }
