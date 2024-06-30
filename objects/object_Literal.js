// You are already familiar with this but here are some insights
// Object literals allow you to create objects quickly and conveniently without needing to define a separate class.

let propName = 'age';
let person = {
    name: 'Alice',
    [propName]: 25 // Computed property name
};

console.log(person.age); // Outputs: 25


// Do you remember symbols? :)

let key1 = Symbol("Obj1");
let key2 = Symbol("Obj2");

let keyObj = {
    [key1]: 1,
    [key2]: 2
}

console.log(keyObj[key1]); // Output: 1
console.log(keyObj[key2]); // Output: 2
