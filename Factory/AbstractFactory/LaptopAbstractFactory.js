const LenovoLaptop = require("./LenovoLaptop")
const HPLaptop = require("./HPLaptop")


class LaptopAbstractFactory {
    create(type, modelName) {
        switch (type) {
            case "HP":
                return new HPLaptop(modelName);
                break;
            case "Lenovo":
                return new LenovoLaptop(modelName);

                break;
            default:
                break;
        }
    }
}

module.exports = new LaptopAbstractFactory();