// ╔════════════════════╗
// ║     Variables      ║
// ╚════════════════════╝

// Old Method with var
var firstName = 'Hassan';   // Initialize firstName with 'Hassan' using var
console.log(firstName);     // Output: Hassan

firstName = 'Ali';          // Change firstName to 'Ali'
console.log(firstName);     // Output: Ali

firstName = `Shahbaz`;      // Change firstName to 'Shahbaz' using template literals
console.log(firstName);     // Output: Shahbaz

// New Method using let
let secondName = "Murtaza"; // Initialize secondName with 'Murtaza' using let
console.log(secondName);    // Output: Murtaza

// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                Differences                                   ║
// ╠══════════════════════════════════════════════════════════════════════════════╣
// ║ 1. Scope: var is function-scoped, meaning it is visible throughout the       ║
// ║    function where it is declared, even when declared within a block (if, for,║
// ║    etc.).                                                                    ║
// ║    let is block-scoped, meaning it is only visible within the block it is    ║
// ║    declared in (block is defined by {}).                                     ║
// ║                                                                              ║
// ║ 2. Hoisting: var declarations are hoisted to the top of their function scope ║
// ║    or global scope. This means you can use a var before it is declared in    ║
// ║    your code. (we will see this later)                                       ║
// ║    let declarations are hoisted to the top of their block scope, but they    ║
// ║    are not initialized. You cannot access let variables before they are      ║
// ║    declared.                                                                 ║
// ║                                                                              ║
// ║ 3. Re-declaration: var allows re-declaration of the same variable within the ║
// ║    same scope without an error. let does not allow re-declaration of the same║
// ║    variable within the same scope; it will throw a SyntaxError.              ║
// ║                                                                              ║
// ║ 4. Usage Recommendation: Use let over var in modern JavaScript for better    ║
// ║    control over variable scoping and to avoid unexpected behavior due to     ║
// ║    hoisting.                                                                 ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
