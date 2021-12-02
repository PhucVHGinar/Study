// When you declare a variable with var, it is declared globally or locally if declared inside a function
// However, the scope of let is limited to the block statement or expression that it was declared in



function checkScope(){
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope is: ", i)
    }

    console.log("Function scope is: ", i);
    return i;
}

checkScope();