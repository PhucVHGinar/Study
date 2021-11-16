function defaultOptions(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bicycle";
            break;
        case "c":
            answer = "car";
            break;
        default:
            answer = "Default Stuff";
            break;
    }

    return answer
}

console.log(defaultOptions("a"));
console.log(defaultOptions("b"));
console.log(defaultOptions("c"));
console.log(defaultOptions(1));