// In order to create more flexible functions you can use default parameters.
// The default parameter kick in when the argument is not specified or is undefined

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();

console.log(increment(5, 2));
console.log(increment(5));
