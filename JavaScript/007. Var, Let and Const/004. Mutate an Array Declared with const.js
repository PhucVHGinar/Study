// While you cannot reassign a variable declared with const, you can mutate an array
// 

const s = [5, 7, 2];            // First we declare the variable s and we assign it to an array
function editInPlace() {
    "use strict";

   // s = [2, 5, 7];              // And now we're going to reassign the variable s here
   s[0] = 2;                        // Reassign array s using bracket notation
   s[1] = 5;
   s[2] = 7;
}

editInPlace();

console.log(s);