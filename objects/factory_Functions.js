/* 
   ╔═══════════════════════════════════════════════════════╗
   ║ Think of a factory function like a factory where      ║
   ║ things go in and products come out. Factory functions ║
   ║ help us reduce code lines by acting as a single point ║
   ║ to create multiple objects of the same type. We don't ║
   ║ need to use the 'new' keyword as with constructors.   ║
   ╚═══════════════════════════════════════════════════════╝
*/

// Let's suppose we want to save the info of the user as a project for each new user
function userInfo(name, age) {
    return {
        name: name,
        age: age
    };
}

const obj1 = userInfo("Hassan", 25);
const obj2 = userInfo("Ali", 29);
const obj3 = userInfo("Hamza", 21);

// Logging properties of obj1
for (const key in obj1) {
    console.log(obj1[key]);
}

// BOOM! 3 objects created without complexity and fewer lines of code

// Usually in JS when making objects using the constructor, we have to use the NEW keyword, but here we are free from that requirement

// If the parameter names and key names in the object are the same, we can write them as
function userInfo(name, age) {
    return {
        name,
        age
    };
}

const obj4 = userInfo("Hamza", 21);

// Logging properties of obj4
for (const key in obj4) {
    console.log(obj4[key]);
}
