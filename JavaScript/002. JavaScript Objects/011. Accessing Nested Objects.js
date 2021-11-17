// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "ouside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
var passengerSeatContent = myStorage.car.inside["passenger seat"];
var trunkContents = myStorage.car.ouside.trunk;

console.log(gloveBoxContents);
console.log(passengerSeatContent);
console.log(trunkContents);