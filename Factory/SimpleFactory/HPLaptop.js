const Laptop = require("./Laptop")

class HPLaptop {
    constructor(modelNumber){
       return new Laptop(modelNumber,"HP", "16GB", "512 SDD", "12Inch")
    } 
}

module.exports = HPLaptop;
