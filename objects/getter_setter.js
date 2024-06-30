// Getters and setters are special functions that allow you to define how properties on an object are accessed and assigned.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    // Getter for fullName property
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Setter for fullName property
    set fullName(name) {
        const parts = name.split(' ');  // Split the name by space
        this.firstName = parts[0];      // Assign the first part to firstName
        this.lastName = parts[1];       // Assign the second part to lastName
    }
};

// Accessing fullName before setting it
console.log(person.fullName); // Outputs: "John Doe"

// Setting fullName using the setter
person.fullName = 'Hassan Murtaza';

// Accessing fullName after setting it using the getter
console.log(person.fullName); // Outputs: "Hassan Murtaza"
