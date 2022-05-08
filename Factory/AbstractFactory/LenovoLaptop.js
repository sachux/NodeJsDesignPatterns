const Laptop = require("./Laptop")

class LenovoLaptop {
    constructor(modelNumber){
       return new Laptop(modelNumber,"Lenovo", "8GB", "512 HDD", "15Inch")
    } 
}

module.exports = LenovoLaptop;
