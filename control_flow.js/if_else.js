// ╔══════════════════════════════════════════════════╗
// ║  Mathematical Expressions and If-Else Statements ║
// ║  - PEMDAS Rule for Order of Operations           ║
// ║  - Using if-else Statements for Control Flow     ║
// ╚══════════════════════════════════════════════════╝

// PEMDAS Rule:
/*  P: Parentheses
    E: Exponents (also roots, etc.)
    M: Multiplication
    D: Division
    A: Addition
    S: Subtraction
*/

// Example: Evaluating expressions
let result = (10 + 5) * 2 / 3 + 8 - 4;
console.log("Result of expression:", result); // Adjust as needed for specific examples

// Example: If-Else Statements
let a = 10;
let b = 20;
let c = 30;

if (a > b && b > c) {
    console.log("A is greater.");
} else if (b > a && a > c) {
    console.log("B is greater.");
} else {
    console.log("C is greater.");
}

// Example: Checking leap year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
