// === Loops in JavaScript ===

// Types of Loops:
// - for loop
// - while loop
// - do...while loop
// - for...in loop
// - for...of loop

// === FOR LOOP ===

// Syntax:
// for (initialization; condition; increment/decrement) {
//    ...block of code
// }

// Example: Iterating through an array and printing each element
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Iterating through an array using for loop:");
for (let idx = 0; idx < numbers.length; idx++) {
    console.log(numbers[idx]);
}

console.log("\nNested loops to print numbers multiple times:");
// Example: Nested loops to print numbers multiple times
for (let idx = 0; idx < numbers.length; idx++) {
    let output = "";

    for (let num = 0; num < numbers[idx]; num++) {
        output += numbers[idx] + " ";
    }
    
    console.log(output);
}

/* OUTPUT:
    1 
    2 2 
    3 3 3 
    4 4 4 4 
    5 5 5 5 5 
    6 6 6 6 6 6 
    7 7 7 7 7 7 7 
    8 8 8 8 8 8 8 8 
    9 9 9 9 9 9 9 9 9 
*/

// Drawing a diamond pattern (example to try)
/*
   *
  ***
 *****
*******
 *****
  ***
   *
*/
