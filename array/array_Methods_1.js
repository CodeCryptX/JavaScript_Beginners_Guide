// We have talked a lot about objects and strings; now let's talk about array methods.
// We will cover some methods here; for more, you can visit "developer.mozilla.org".

let pracArr = [1, 2, 3, 4, 5];

// Push elements to the end of the array, can be single or multiple
pracArr.push(6, 7);
console.log(`After pushing elements to the end: ${pracArr}`);

pracArr = [1, 2, 3, 4, 5];
// Insert elements at the start of the array, can be single or multiple
pracArr.unshift(-1, 0);
console.log(`After inserting elements at the start: ${pracArr}`);

pracArr = [1, 2, 3, 4, 5];
// Add or remove elements in between the array
// Add elements
pracArr.splice(1, 0, "temp1", "temp2"); // splice(start index, no of elements to remove, elements to add)
console.log(`After adding elements in between: ${pracArr}`);

pracArr = [1, 2, 3, 4, 5];
// Remove elements
pracArr.splice(0, 1, "temp1", "temp2"); // splice(start index, no of elements to remove, elements to add)
console.log(`After removing elements in between: ${pracArr}`);

// Check index of any element, similar to strings
// indexOf() and lastIndexOf() help; if there are multiple occurrences, lastIndexof() will give the last occurence from right to left
pracArr = [1, 2, 3, 4, 5, 1]; // multiple occurrences of 1

let index = pracArr.indexOf(1);
console.log(`The first index of 1 is: ${index}`); // Output: 0

index = pracArr.lastIndexOf(1);
console.log(`The last index of 1 is: ${index}`); // Output: 5

// Check if an element is included in the array
let included = pracArr.includes(4);
console.log("Does it include 4:", included);

// Find elements (non-primitive/referenced)
// Using the find method
let persons = [
    {
        name: "Hassan",
        age: 25
    },
    {
        name: "Ali",
        age: 20
    },
    {
        name: "Hussain",
        age: 21
    }
];

let person = persons.find(
    function(e) { // Predicate function (e) that returns true or false
        return e.name === "Ali";
    }
);

console.log("The person found is:", person);
