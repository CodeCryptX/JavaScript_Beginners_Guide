// Last thing about strings: template literals
// Syntax: ${}
// The primary purpose of ${} is to interpolate expressions within strings. 
// This allows embedding JavaScript expressions, variables, or function calls directly into the string without breaking it into multiple parts or using concatenation.

let name = "Hassan";
let greeting = `Hello, ${name}!`;  // alternative to "Hello" + ' ' + name

console.log(greeting); // Output: "Hello, Hassan!"
