// Let's talk about the Date object; it's used to work with dates and times
// It provides methods for creating, manipulating, and formatting dates and times.

// Current date and time
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time

// Creating a Date object for a specific date and time
let specificDate = new Date("2024-06-01T00:01:00Z");
console.log(specificDate); // Output: Date object for the specified date and time

// Creating a Date object from milliseconds since Unix Epoch (January 1, 1970, 00:00:00 UTC)
let timestamp = new Date(1715065323000); // Adjust timestamp value to see different dates
console.log(timestamp); // Output: Date object for the specified timestamp

// Here are some methods for Date objects
let now = new Date();
console.log(now.getFullYear()); // Current year
console.log(now.getMonth());    // Current month (0-11)
console.log(now.getDate());     // Current day of the month (1-31)
console.log(now.getHours());    // Current hour (0-23)
console.log(now.getMinutes());  // Current minute (0-59)
console.log(now.getSeconds());  // Current second (0-59)
console.log(now.getDay());      // Current day of the week (0-6)

// Creating a custom Date object
let birthday = new Date();
birthday.setFullYear(2024);
birthday.setMonth(6); // July (0-11, January is 0)
birthday.setDate(27);

console.log('The birthday is on:', birthday);

// For more methods and details, visit developer.mozilla.org
