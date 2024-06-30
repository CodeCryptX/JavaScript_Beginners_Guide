/*
->______________________/DO While LOOP\
->SYNTAX
   initialization;
   do {
      ...block of code
      inc/dec;
   } while(condition);
*/

// The do...while loop always executes its body at least once

let i = 0;
console.log("First do_while loop:");
do {
  console.log(i);
  i++;
} while (i < 5); // Output: 0, 1, 2, 3, 4

console.log("\nSecond do_while loop:");
i = 0;
do {
  console.log(i);
  i++;
} while (i < 1); // Output: 0
