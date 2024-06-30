// ╔══════════════════════════════════════════╗
// ║   Comparison Operators in JavaScript     ║
// ╚══════════════════════════════════════════╝
// Used to compare variables and return true or false based on the result:
// >    -> Greater than
// >=   -> Greater than or equal to
// <    -> Less than
// <=   -> Less than or equal to

let a = 5;
let b = 10;

// Greater than
let result = a > b;
console.log("Greater than:");
console.log(result); // Outputs: false
console.log(a > b); // Outputs: false

// Less than
console.log("Less than:");
result = a < b; // Remember JavaScript has dynamic typing
console.log(result); // Outputs: true
console.log(a < b); // Outputs: true

// Greater than or equal to
console.log("Greater than or equal to:");
result = a >= b; // Remember JavaScript has dynamic typing
console.log(result); // Outputs: false
console.log(a >= b); // Outputs: false

// Less than or equal to
console.log("Less than or equal to:");
result = a <= b; // Remember JavaScript has dynamic typing
console.log(result); // Outputs: true
console.log(a <= b); // Outputs: true
