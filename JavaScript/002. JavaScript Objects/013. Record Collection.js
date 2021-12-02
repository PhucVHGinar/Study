// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection)); // This is just a fancy way in JavaScript to make a copy of the object

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []; // If the tracks property is already exist, we're going to set it equal itself. But if itself doesnt exist, we'll set it to equal an empty array
        collection[id][prop].push(value); // We will push the value to the end of the array of tracks property
    } else {
        collection[id][prop] = value; // If the value isn't blank, and the property isn't tracks, then we just push the value onto the property
    }

    return collection;
}

// Alter values below to test your code
/* console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2468, "tracks", "test"));
console.log(updateRecords(5439, "tracks", "test"));

console.log(updateRecords(2548, "artist", ""));
console.log(updateRecords(1245, "tracks", "1245TrackTest")); */
console.log(updateRecords(5439, "artist", "ABBA"));