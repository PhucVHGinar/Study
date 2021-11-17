function phoneticLookup(val) {
    var result = "";

    var lookUp = {
        "alpha": "Adam",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookUp[val]; // important => must have this line to return the properties inside lookUp to result

    // Only change code below this line
    /*switch(val) {
        case "alpha":
            result = "Adam";
            break;

        case "bravo":
            result = "Boston";
            break;

        case "charlie":
            result = "Chicago";
            break;

        case "delta":
            result = "Denver";
            break;

        case "echo":
            result = "Easy";
            break;

        case "foxtrot":
            result = "Frank";
            break;
    }; */

    return result;
}

console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));