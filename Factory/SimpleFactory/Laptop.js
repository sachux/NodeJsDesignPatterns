class Laptop{
    constructor(modelNumber, brand, processor, ram = "4gb", storage = "1TB HDD", screensize="14-Inch"){
        this.modelNumber = modelNumber;
        this.brand = brand;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.screensize = screensize;
    }

    getDetails(){
        console.log(` ${this.brand} presents ${this.modelNumber} with ${this.processor} processor and ${this.ram} ram.`)
    }
}

module.exports = Laptop;