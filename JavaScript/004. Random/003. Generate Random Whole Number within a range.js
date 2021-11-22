function ourRandomRange(ourMin, OurMax) {
    return Math.floor(Math.random() * (OurMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1,2));

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(myRandom);