// ╔══════════════════════════════════════════╗
// ║      Ternary Operator in JavaScript      ║
// ╚══════════════════════════════════════════╝
// Ternary operators are of the form: condition ? expression1 : expression2
// If the condition (a) is true, then expression1 (b) is executed; otherwise, expression2 (c) is executed.

let a = 5;
let b = 6;

let result = a > b ? "True" : "False";

console.log("The result is: " + result);

// Ternary operator can also be nested, for example:

let numbers = 40;

let grade = numbers >= 90 ? "A" :
            numbers >= 80 ? "B" :
            numbers >= 70 ? "C" :
            numbers >= 60 ? "D" :
            numbers >= 50 ? "E" : "F";

console.log("The grade is: " + grade);

// Ternary operator is also useful for checking null values

let obj = {
    name: null
};

let isNameNull = obj.name === null ? "True" : "False";

console.log("Is the name null: " + isNameNull);
