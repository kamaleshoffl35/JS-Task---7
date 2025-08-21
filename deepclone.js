function deepClone(obj) {
    
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    
    if (Array.isArray(obj)) {
        let newArr = [];
        for (let i = 0; i < obj.length; i++) {
            newArr[i] = deepClone(obj[i]);
        }
        return newArr;
    }

    
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }

    return newObj;
}


let original = {
    name: "John",
    address: { city: "Paris", zip: 12345 },
    hobbies: ["reading", "sports"]
};

let copy = deepClone(original);


copy.address.city = "London";
copy.hobbies[0] = "music";

console.log("Original:", original);
console.log("Copy:", copy);
