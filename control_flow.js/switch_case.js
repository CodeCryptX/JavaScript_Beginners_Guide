// ╔════════════════════════════════════════════╗
// ║     Switch Statements in JavaScript        ║
// ╚════════════════════════════════════════════╝

// Example: Switch statement without boolean expression
let day = 4;

switch (day) {
    case 1:
        console.log("Monday.");
        break;
    case 2:
        console.log("Tuesday.");
        break;
    case 3:
        console.log("Wednesday.");
        break;
    case 4:
        console.log("Thursday."); // Output: Thursday
        break; // Exit the switch
    case 5:
        console.log("Friday.");
        break;
    case 6:
        console.log("Saturday.");
        break;
    case 7:
        console.log("Sunday.");
        break;
    default:
        console.log("Error!");
        break;
}

console.log("Switch cases over.");

// Example: Switch statement with boolean expression
let random = 5;
let result;

switch (true) {
    case (random > 1 && random < 5):
        result = "Lose";
        break;
    case (random > 5 && random < 10):
        result = "Win";
        break;
    default:
        result = "Tie";
        break;
}

console.log("The result is:", result); // Output: Lose

// Example: Switch statement using fall-through concept
let fruit = 'apple';
let color;

switch (fruit) {
    case 'apple':   // No use of break
    case 'cherry':
        color = 'red';
        break;
    case 'banana':
        color = 'yellow';
        break;
    case 'grape':
        color = 'purple';
        break;
    default:
        color = 'unknown';
}

console.log(color); // Outputs: red

// Example: Switch statement with multiple cases without break
day = 4; // Thursday (already defined above)

switch (day) {
    case 1: // Sunday
    case 7: // Saturday
        console.log("It's a weekend!");
        break;
    case 2: // Monday
    case 3: // Tuesday
    case 4: // Wednesday
    case 5: // Thursday
    case 6: // Friday
        console.log("It's a weekday.");
        break;
    default:
        console.log("Invalid day.");
}
