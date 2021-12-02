// Const is another way to declare a variable. It has all the features of let but it's also read-only
// You can not reassign a const
// If you know for sure that you never want to reassign a variable, then always use const so you don't accidentally reassign it when you don't mean to
// Another thing is when you use const, it's very common to use all capital letters


function printManyTimes(str) {
    "use strict";

    // var sentence = str + " is cool!"; // Declare a variable called sentence

    const SENTENCE = str + " is amazing!";  // Reassign that variable sentence

    for(let i = 1; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}

printManyTimes("12345");

