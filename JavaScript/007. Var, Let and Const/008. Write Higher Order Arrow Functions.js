 // Arrow functions work really well with higher order funcitons such as map, filter, and reduce.
 // They take functions as arguments for processing collections of data
 // Whenever one function takes another function as an argument, that's a good time for an arrow funciton.

 // We're going to update this function right here. We want it to compute the square of only the positive integers in the array

 const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

 const SquareList = (arr) => {
     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
     return squaredIntegers;
 }

 const squaredIntegers = SquareList(realNumberArray);
 console.log(squaredIntegers);