// ╔════════════════════════════════════════════════════════╗
// ║         Primitive Data Types in JavaScript             ║
// ╚════════════════════════════════════════════════════════╝

// Number
let noOfBalls = 5;
let pi = 3.14;

console.log("no of balls:", noOfBalls, "(", typeof noOfBalls, ")");
console.log("the value of pi:", pi, "(", typeof pi, ")");

// String
let colorGreen = "Green";
let colorRed = 'Red';
let colorYellow = `Yellow`;

// Null
let nullValue = null;
console.log("The null data type:", nullValue, "(", typeof nullValue, ")");

// Undefined
let undefinedValue = undefined;
console.log("The undefined data type:", undefinedValue, "(", typeof undefinedValue, ")");

// BigInt
let BigIntValue = 10n;
console.log("The bigint data type:", BigIntValue, "(", typeof BigIntValue, ")");

// Boolean
let weAreGoingToMakeHistory = true;
console.log("The boolean data type:", weAreGoingToMakeHistory, "(", typeof weAreGoingToMakeHistory, ")");

// Symbol
// Why symbols? Making unique keys was difficult previously

const k1 = Symbol("H1");
const k2 = Symbol("H1");

console.log("The k1:", k1);
console.log("The k2:", k2);

// As they are unique
console.log("Are k1 and k2 equal:", k1 === k2); // Returns false as symbols are unique

// Using Symbols in objects
const key1 = Symbol('key');
const key2 = Symbol('key');

const obj = {
  [key1]: 'value1',
  [key2]: 'value2',
  number: 5
};

console.log(obj[key1]); // Outputs: value1
console.log(obj[key2]); // Outputs: value2

for (let key in obj) {
  console.log(key); // Outputs: number (symbols are ignored in for...in loops)
}

// We also cannot access symbols using dot notation
console.log(obj.key1); // Outputs: undefined

// Non-primitive types include objects, arrays, functions, and sets, which we'll discuss later.
