const LaptopBuilder = require("./LaptopBuilder");

const laptop = new LaptopBuilder("Envy","HP")
                                    .setProcessor("Intel i7")
                                    .setRam("16GB")
                                    .setStorage("1TB SSD")
                                    .create();

laptop.getDetails();