// We have talked a lot about other things, let's dive into strings now.
// They have great importance in every programming language.
// You can manipulate them and their outputs can be tricky, especially in low-level languages like C++/C.

// Let's discuss string methods in JavaScript. Strings are primitive, but they have methods accessible in JS.

const name = "Hassan";
console.log("The type of name variable:", typeof name); // OUTPUT: String

// We can clone a string into another variable, similar to objects.

const newName = new String("Ali");
console.log("The type of newName variable:", typeof newName); // OUTPUT: String

// Now let's check other methods.

let sentence = "A quitter never wins and a winner never quits.";

// Check if sentence includes a specific letter or word.

const doesInclude = sentence.includes("wins");
console.log("Does the sentence include 'wins'?", doesInclude); // true

// Access any character in the string (strings act like arrays).
console.log("The character at index 0:", sentence[0]); 
// OR
console.log("The character at index 0:", sentence.charAt(0)); 

// Check ASCII value of a character.
console.log("The ASCII of the character at index 0:", sentence.charCodeAt(0)); 

// Check if word starts with a letter (you can also check ends with).
console.log("Does the sentence start with 'w'?", sentence.startsWith('w')); // false

// Convert the entire string to lower or upper case.
console.log("The sentence in lowercase:", sentence.toLowerCase()); 

// Replace any word.
console.log("Modified sentence:", sentence.replace("quitter", "loser")); 

// Another useful method is split, which splits the string based on a delimiter and stores it in an array.
console.log("Split sentence:", sentence.split(" "));  // split by space, output: ['A', 'quitter', 'never', 'wins', 'and', 'a', 'winner', 'never', 'quits.']

// Lastly, use trim to remove extra spaces.
sentence = "     A quitter never wins and a winner never quits.          ";
console.log("Trimmed sentence:", sentence.trim());  // no extra spaces

// Check more methods on "developer.mozilla.org"
