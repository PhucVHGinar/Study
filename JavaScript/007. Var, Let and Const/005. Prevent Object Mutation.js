// As the previously exercise, a const declaration alone doesn't really protect your data from mutation
// If you have an object or an array, you can still mutate it even if it's declared with const
// There is something call object.freeze that will prevent data mutation

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {                       // it's going to try what's in the first part of the block.
        MATH_CONSTANTS.PI = 99; // => In this line, we're going to try to change MATH_CONSTANTS.PI to 99.
    } catch(ex) {             // And if there's an error, then it's going to go into the catch part and it's going to log it out.
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;   // We're going to return the MATH_CONSTANTS.PI.
}

const PI = freezeObj();         // And down here. we're going to putting it into a variable called PI.

console.log(PI);
