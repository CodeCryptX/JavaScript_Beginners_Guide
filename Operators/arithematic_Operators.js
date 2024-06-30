// ╔══════════════════════════════════════════╗
// ║        Operators in JavaScript           ║
// ╚══════════════════════════════════════════╝
// Arithmetic operators in JavaScript:

// * -> Multiplication
// / -> Division
// + -> Addition
// - -> Subtraction
// % -> Modulus
// ** -> Exponentiation
// ++ -> Increment
// -- -> Decrement

let x = 10;
let y = 2;

// Addition
let addition = x + y; 
console.log("Addition: " + addition); // Outputs: 12

// Subtraction
let subtraction = x - y; 
console.log("Subtraction: " + subtraction); // Outputs: 8

// Multiplication
let multiplication = x * y; 
console.log("Multiplication: " + multiplication); // Outputs: 20

// Division
let division = x / y; 
console.log("Division: " + division); // Outputs: 5

// Modulus
let modulus = x % y; 
console.log("Modulus: " + modulus); // Outputs: 0

// Exponentiation
let exponentiation = x ** y; 
console.log("Exponentiation: " + exponentiation); // Outputs: 100

// Increment
x++; 
console.log("Increment: " + x); // Outputs: 11

// Decrement
y--; 
console.log("Decrement: " + y); // Outputs: 1

// Note on increment operators:
function inc(num){
    return ++num; // Pre-increment: increments first, then returns
}
console.log("The value after ++num: " + inc(1)); // Outputs: 2

function inc1(num){
    return num++; // Post-increment: returns first, then increments
}
console.log("The value after num++: " + inc1(1));  // Outputs: 1
