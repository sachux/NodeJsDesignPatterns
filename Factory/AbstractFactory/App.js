const laptopFactory = require("./LaptopAbstractFactory")


const lenovoLaptop = laptopFactory.create("Lenovo", "E15");
lenovoLaptop.getDetails()

const hpLaptop = laptopFactory.create("HP","HP-Envy");
hpLaptop.getDetails()