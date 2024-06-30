// Here we will see methods to clone objects

// NOTE: OBJECTS ARE PASSED BY REFERENCE
//       VALUES ARE PASSED BY COPY

// Let's clone objects

// 1st method: Shallow clone using Object.assign()
let a = { value: 10 };
let b = {};

Object.assign(b, a);

console.log("Shallow clone using Object.assign():");
for (const key in b) {
    console.log(b[key]);
}

// 2nd method: Direct assignment (reference)
b = a;
b.value = 5;
console.log("Direct assignment (reference):", a.value); // Output: 5 (changes are reflected in 'a')

// 3rd method: Shallow clone using spread operator (efficient and modern)
a.value = 10;
b = {};
console.log("Shallow clone using spread operator:");
b = { ...a };
console.log(b.value); // Output: 10

// Deep cloning example
const person = {
    name: 'Hassan',
    age: 30,
    address: { city: 'Lahore', country: 'Pakistan' }
};

// Shallow copy using spread operator
let newPerson = { ...person };

// Deep copy using JSON methods
const clone = JSON.parse(JSON.stringify(person));

// Modify the address in newPerson (shallow copy)
newPerson.address.city = 'Karachi';

// Modify the address in clone (deep copy)
clone.address.city = 'Islamabad';

console.log('\nOriginal person:', person);
console.log('Shallow copy (newPerson):', newPerson);
console.log('Deep copy (clone):', clone);
