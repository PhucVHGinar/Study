var contacts = [
    {
        "firstName": "Akira",
        "lastName": "laine",
        "number": "0902821105",
        "likes": ["Pizza", "Coding", "Brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0907316683",
        "likes": ["Howards", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0123456789",
        "likes": ["Investigating Case", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScripts", "Gaming", "Foxes"]
    }
]

function lookupProfile(name, prop) {
    for(i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name || contacts[i].lastName === name) {
            return contacts[i][prop] || "No such property";
            }
        }
        
        return "No such contact";
    }
    

// Change these values to test
var data = lookupProfile("Vos", "firstName");
console.log(data);