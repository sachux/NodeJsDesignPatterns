const Laptop = require("./Laptop")

class LaptopBuilder{
    constructor(name,brand){
        this.modelName = name;
        this.brand = brand;
    }

    setRam(ram){
        this.ram = ram;
        return this;
    }

    setStorage(storage){
        this.storage = storage;
        return this;
    }

    setProcessor(processor){
        this.processor = processor;
        return this;
    }

    setScreenSize(size){
        this.size = size;
        return this;
    }

    create(){
        return new Laptop(this.modelName, this.brand, this.processor, this.ram, this.storage, this.size)
    }
}

module.exports = LaptopBuilder;