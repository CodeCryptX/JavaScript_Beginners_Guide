// ╔════════════════════════════════════════════════════╗
// ║    Logical Operators in JavaScript with Examples   ║
// ║      - && (AND), || (OR), ! (NOT), ?? (Nullish)    ║
// ╚════════════════════════════════════════════════════╝

// ──────────────── // AND OPERATOR ──────────────────
// expr1 && expr2
// Returns true if both values are true.

console.log("For AND OPERATOR:");

// Boolean
console.log("For boolean:");
console.log(true && false); // Output: false
console.log(false && true); // Output: false
console.log(true && true);  // Output: true
console.log(false && false); // Output: false

// Non-Boolean
console.log("For non-boolean:");

console.log(null && null);    // Output: null
console.log(null && true);    // Output: null
console.log(true && null);    // Output: null
console.log(true && true);    // Output: true

console.log("For Number:");
console.log(null && null);    // Output: null
console.log(null && 1);       // Output: null
console.log(1 && null);       // Output: null
console.log(1 && 1);          // Output: 1

console.log("For String:");
console.log(null && null);    // Output: null
console.log(null && "hi!");   // Output: null
console.log("hi!" && null);   // Output: null
console.log("hi!" && "hi!");  // Output: hi!

// ──────────────── // OR OPERATOR ───────────────────
// expr1 || expr2
// Returns true if at least one value is true.

console.log("\nFor OR OPERATOR:");

// Boolean
console.log("For boolean:");
console.log(true || false);  // Output: true
console.log(false || true);  // Output: true
console.log(true || true);   // Output: true
console.log(false || false); // Output: false

// Non-Boolean
console.log("For non-boolean:");

console.log(null || null);   // Output: null
console.log(null || true);   // Output: true
console.log(true || null);   // Output: true
console.log(true || true);   // Output: true

console.log("For Number:");
console.log(1 || null);      // Output: 1
console.log(null || null);   // Output: null
console.log(null || 1);      // Output: 1
console.log(1 || 1);         // Output: 1

console.log("For String:");
console.log(null || null);   // Output: null
console.log(null || "hi!");  // Output: hi!
console.log("hi!" || null);  // Output: hi!
console.log("hi!" || "hi!"); // Output: hi!

// ──────────────── // NOT OPERATOR ──────────────────
// !exp
// Returns the opposite boolean value of the operand.

console.log("\nFor NOT OPERATOR:");
console.log(!true);          // Output: false
console.log(!false);         // Output: true

// With non-Boolean values
console.log(!0);             // Output: true (0 is falsy)
console.log(!1);             // Output: false (1 is truthy)
console.log(!'hello');       // Output: false (non-empty string is truthy)
console.log(!null);          // Output: true (null is falsy)

// ──────────────── // NULLISH COALESCING OPERATOR ────
// expr1 ?? expr2
// Returns expr2 if expr1 is null or undefined, otherwise returns expr1.

let age;
let defaultAge = 18;

let userAge = age ?? defaultAge;

console.log("\nNullish Coalescing Operator:");
console.log("The user age is: " + userAge);

// ──────────────── // SHORT-CIRCUIT EVALUATION ──────
// Helps optimize logical operations by stopping evaluation as soon as the result is determined.

function expensiveOperation() {
    console.log('Expensive operation performed');
    return true;
}

// Using AND operator for short-circuit evaluation
let result = false && expensiveOperation();
console.log("Result of short-circuit evaluation:", result); // Output: false (expensiveOperation is not called, optimizing computation)
