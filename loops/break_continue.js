// After studying loops, there are two main control flow statements to remember: break and continue.
// - break: Exits the current loop or switch statement.
// - continue: Skips the current iteration and proceeds to the next one.

// Example using continue: Display only odd numbers from an array and skip even numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Displaying odd numbers using continue:");
for (let idx = 0; idx < numbers.length; idx++) {
    if (numbers[idx] % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd number:", numbers[idx]); // Output: 1, 3, 5, 7, 9
}

// Example using break: Stop the loop when encountering a specific condition (e.g., finding -1).
numbers[4] = -1; // Setting the 4th index to -1

console.log("\nDisplaying numbers until -1 using break:");
for (let idx = 0; idx < numbers.length; idx++) {
    if (numbers[idx] === -1) {
        break; // Exit loop when encountering -1
    }
    console.log("Num:", numbers[idx]); // Output: 1, 2, 3, 4
}

// Using break with a for...in loop over an object's keys
const obj = { a: 1, b: 2, c: 3 };

console.log("\nDisplaying keys until 'b' using break in for...in loop:");
for (const key in obj) {
    if (key === "b") {
        break; // Exit loop when key is 'b'
    }
    console.log(key); // Output: a
}

// These are powerful tools for controlling the flow of loops. Mastering them enhances loop functionality.
