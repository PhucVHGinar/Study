function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-1));

function checkSign2(num) {
    if (num > 0) {
        return "positive";
    }

    else if (num < 0) {
        return "negative";
    }

    else {
        return "zero";
    }
}

console.log(checkSign2(-34));