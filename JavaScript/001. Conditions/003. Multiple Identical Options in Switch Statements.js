function sequentialSize(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;

        case 4:
        case 5:
        case 6:
            answer = "Medium";
            break;

        case 7:
        case 8:
        case 9:
            answer = "High";
            break;

        default:
            answer = "Others";
            break;
    }
    return answer;
}

console.log(sequentialSize(1));
console.log(sequentialSize(2));
console.log(sequentialSize(3));
console.log(sequentialSize(4));
console.log(sequentialSize(5));
console.log(sequentialSize(6));
console.log(sequentialSize(7));
console.log(sequentialSize(8));
console.log(sequentialSize(9));
console.log(sequentialSize("werwer"));