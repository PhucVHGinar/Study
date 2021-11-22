// The While loops first check the condition before running any while loops
// A Do...While loops will always run at least 1 time and then it will check the conditions

// Setup
var myArray = [];
var i = 10;

// Only change code below this line
 do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);