// Continuing with array methods:

// Remove elements from the array
let pracArr = [1, 2, 3, 4, 5];

// Remove from the start
pracArr.shift();
console.log(`After removing element from start: ${pracArr}`);

// Remove from the end
pracArr = [1, 2, 3, 4, 5];
pracArr.pop();
console.log(`After removing element from end: ${pracArr}`);

// Make an array empty
pracArr = [1, 2, 3, 4, 5];

// 1st way
pracArr.length = 0;
console.log(`Empty: ${pracArr}`);

// 2nd way
pracArr = [1, 2, 3, 4, 5];
pracArr.splice(0, pracArr.length);
console.log(`Empty_1: ${pracArr}`);

// 3rd way
pracArr = [1, 2, 3, 4, 5];
pracArr = [];
console.log(`Empty_2: ${pracArr}`);

// Concatenate arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(`After concatenation: ${arr1.concat(arr2)}`);

// Combine arrays using the spread operator (efficient way)
let combine = [...arr1, "Adding in between", ...arr2, 7, 8, 9];
console.log(`After combining: ${combine}`);

// Iterate over array
combine.forEach((number) => {
    console.log(number);
});

// Join and Method chaining
let num = [1, 2, 3, 4, 5];
let join = num.join(','); // Convert array to a string using the specified separator (comma here)
console.log("After joining:", join); // Output: String: "1,2,3,4,5"

// Method chaining: Sort and reverse the array
num.sort().reverse();
console.log("Method chain:", num);
