// Summarizing array methods:

// EVERY METHOD
let numbers = [1, 2, 3, 4, 5];

// Check if all numbers are even
let allEven = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log("All numbers are even:", allEven); // Output: false (not all numbers are even)

// SOME METHOD
// Check if any number is even
let anyEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log("Any number is even:", anyEven); // Output: true (at least one number is even)

// FILTER METHOD
// Filter even numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); // Output: [2, 4]

// MAP METHOD
// Map a new array by adding 1 to each element
let mappedArray = numbers.map(num => num + 1);
console.log("Mapped array:", mappedArray); // Output: [2, 3, 4, 5, 6]

// REDUCE METHOD
// Reduce the array to the sum of all elements
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Sum of numbers:", sum); // Output: 15
