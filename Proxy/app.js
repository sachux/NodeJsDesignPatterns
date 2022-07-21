const {
    lock,
    unlock
} = require("./PassVault");
const password = "thisisastrongpassword123";

const obj = {
    name: "Abdul Asees",
    age: 32,
    city: "Mumbai",
    country: "IN"
};

const person = lock(obj, password);
person.favColor = "Purple";
person.favFruit = "Orange";
console.log("Encrypted Data");
console.log(person);
console.log("---------------------------------------");


console.log("---------------------------------------");
console.log("Decrypted Data");
const unlocked = unlock(person, password);
// unlocked.food = "Pizza";
console.log(unlocked);
console.log("---------------------------------------");
