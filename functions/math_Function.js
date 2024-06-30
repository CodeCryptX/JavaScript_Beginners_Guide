// Like other languages, JavaScript also has built-in math functions for performing mathematical operations

// Generate a random number between 0 and 1
let randomNo = Math.random();
console.log("Random number between 0 and 1:", randomNo);

// Generate a random number within a specified range
let max = 100;
let min = 10;
randomNo = Math.random() * (max - min) + min;
console.log("Random number between max and min:", randomNo);

// Find absolute value
let absValue = Math.abs(-10);
console.log("Absolute value:", absValue); // Output: 10

// Trigonometry functions
let angle = Math.sin(Math.PI / 2); // Output: 1 (sin(π/2) = 1)
console.log("Angle:", angle);
