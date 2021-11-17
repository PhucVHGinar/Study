// Example
var ourDog = {
    "name": "Campell",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow wow"
};

delete ourDog.bark;
console.log(ourDog.bark); // console log will display undefined due to bark property is deleted

var myCar = {
    "brand": "Honda",
    "name": "City",
    "wheels": 4,
    "license": ["Available", "due date"]
}

delete myCar.brand;
console.log(myCar.brand);