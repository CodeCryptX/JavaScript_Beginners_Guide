// JavaScript is very user friendly
// There is one more example of it

function add(n1, n2) {
    return n1 + n2;
}

// Now even if I send more arguments than needed, it will not give an error
console.log(add(1, 2, 3)); // Output: 3

// Even if I send fewer arguments, it still works
console.log(add(1)); // Output: NaN (Not a Number)

// Default parameters
// We can also define default values for parameters if they are not provided

function defParameter(name = "Hassan", age = 25) {
    console.log(`Hello ${name}, Welcome to JavaScript!\nWhat's your age?`);
    console.log(`My age is ${age}.`);
}

// Now I will send one argument and the other will be used as defined
defParameter("", 20); // Output: Hello , Welcome to JavaScript!
                      //         What's your age?
                      //         My age is 20.

defParameter("Ali"); // Output: Hello Ali, Welcome to JavaScript!
                     //         What's your age?
                     //         My age is 25.
