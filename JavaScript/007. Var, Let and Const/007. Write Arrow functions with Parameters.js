// Just like a normal funciton, you can pass arguments to arrow functions.

var myConcat = function(arr1, arr2) { // a norml funciton and it has two arguments
    return arr1.concat(arr2);         // it's going to concatenate the two arrays passed in.
};

console.log(myConcat([1, 2], [3, 4, 5]));


// How to convert above function into an arrow function
const myConcat1 = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat1([1,2], [3,4,5,6,7], [5,6,7]));