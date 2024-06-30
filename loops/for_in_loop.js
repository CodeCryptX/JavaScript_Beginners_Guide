/*
╭───────────────────────╮
│   FOR...IN LOOP       │
╰───────────────────────╯

╭───────────────────────────────────────────────╮
│   SYNTAX                                      │
│   for (variable in objects) {                 │
│      ... body                                 │
│   }                                           │
│                                               │
│   This loop is primarily used for objects,    │
│   including arrays in JavaScript.             │
│                                               │
│   Reasons not to use for...in for arrays:     │
│   1) Can iterate in arbitrary order           │
│   2) Iterates over inherited properties       │
│                                               │
│   Note: for...in doesn't check for symbols    │
╰───────────────────────────────────────────────╯
*/

let person = { 
    name: "Hassan",
    age: 30,
    netIncome: function() {
        return "$100k";
    }                                                                 
};

// Loop to print keys and values
for (const key in person) {
    console.log("Key:", key);              // Outputs the names of the keys
    if (typeof person[key] === 'function') {
        console.log("Value:", person[key]());  // Executes the method and logs its return value
    } else {
        console.log("Value:", person[key]);    // Logs the values associated with non-function properties
    }
}
