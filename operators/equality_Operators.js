// ╔══════════════════════════════════════════╗
// ║      Equality Operators in JavaScript    ║
// ╚══════════════════════════════════════════╝
// =   -> Assignment operator (to assign one value to another)
// ==  -> Loose equality operator (compares after converting variables to the same type)
// === -> Strict equality operator (compares without type conversion)

// Assignment operator (=) to assign one value to another
let a = 5;
console.log("a: " + a);
let b = 10;
a = b; // Using the assignment operator
console.log("a after assignment of b: " + a);

// == Loose equality
// Compares by converting variables to the same type and then checking
a = 5;
b = '5';
let result = a == b;
console.log("When b is '5': " + result); // Outputs: true, converts '5' to number and compares

b = '4';
result = a == b;
console.log("When b is '4': " + result); // Outputs: false, converts '4' to number and compares

// === Strict equality
// Does not perform type conversion, simply checks if both values and types are identical
a = 5;
b = 5;
result = a === b;
console.log("When b is 5: " + result); // Outputs: true
