// let does not let you describe a variable twice

let catName = "Tom";
let quotes;

 catName = "Quin";

function catTalk() {
    "use strict";

    let catName = "Oliver";
    quotes = catName + "say Meow";
}

console.log(catTalk());