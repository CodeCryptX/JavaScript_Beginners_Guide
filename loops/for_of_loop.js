/*
->______________________/For of LOOP\
->SYNTAX
                      for(variable of array)
                      {
                        ... body
                      }

    // For...of is a convenient way to iterate over iterable objects like arrays and strings.
    // You cannot directly use it for plain objects; first convert them into an array and then use.
*/

let fruits = ["apple", "mango", "orange"];

console.log("Iterating over fruits array:");
for (let fruit of fruits) {
    console.log("The fruit is:", fruit);
}
// Output:
// The fruit is: apple
// The fruit is: mango
// The fruit is: orange

// Iterating over keys and values of an object using Object.keys()
let person = {
    name: "Hassan",
    age: 30,
};

let personArr = Object.keys(person);

console.log("\nIterating over keys and values of person object:");
for (let key of personArr) {
    console.log(key);
    console.log(person[key]);
}
// Output:
// name
// Hassan
// age
// 30
