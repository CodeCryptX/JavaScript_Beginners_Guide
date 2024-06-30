/*
->______________________/While LOOP\
->SYNTAX
   initialization;
   while(condition) {
      ...block of code
      inc/dec;
   }
*/

// While loop is useful when the number of iterations is not known initially

// Example: Print numbers until count reaches five
let count = 0;
console.log("Printing numbers using while loop:");
while (count < 5) {
    console.log(count);
    count++;
}

// Example: Drawing a pattern using nested while loops
console.log("\nDrawing a pattern using while loop:");
let rows = 5;
let row = 1;
while (row <= rows) {
    let spaces = rows - row;
    let stars = 2 * row - 1;

    let line = " ".repeat(spaces) + "*".repeat(stars);
    console.log(line);
    row++;
}

/* OUTPUT:
    *
   ***
  *****
 *******
*********
*/

