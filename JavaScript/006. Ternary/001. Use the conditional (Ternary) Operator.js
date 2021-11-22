// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
    if (a === b) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkEqual(3,5));

function ternaryExample(a,b) {
    return a === b ? true : false;
}

console.log(ternaryExample("mot", "mot"));
